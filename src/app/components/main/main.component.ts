import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/shared/classes/toDo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isEmpty: boolean = false;
  addNew: boolean = false;
  add: boolean = true;
  empty: boolean = false;
  del: boolean = false;
  toDo: string = '';
  arr: Array<any> = [];
  check: boolean = false;
  currentUserId: number;
  currentArr: Array<any> = [];
  currentId: number;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getItems();
  }

  targetModal() {
    if (!this.add) {
      this.add = !this.add;
    }
    this.addNew = !this.addNew;
    this.toDo = '';
    this.isEmpty = false;
  }

  targetDel(i: number) {
    this.del = !this.del;
    this.currentId = i;
  }

  targetEdit(i: number) {
    this.add = !this.add;
    this.addNew = !this.addNew;
    this.isEmpty = true;
    this.toDo = this.currentArr[i].title;
    this.currentId = i;
  }

  checkLength() {
    if (this.toDo.length > 0) {
      this.isEmpty = true;
    }
    else {
      this.isEmpty = false;
    }
  }

  isCheck(i: number) {
    this.currentArr[i].completed = !this.currentArr[i].completed;
  }

  getItems() {
    this.dataService.getAllToDo().subscribe(data => {
      this.currentUserId = JSON.parse(localStorage.getItem('user')).id;
      this.currentArr = Object.values(data).filter(res => {
        if (res.userId == this.currentUserId) {
          return res;
        }
      });
    })
  }

  addItem() {
    if (this.toDo.length > 0) {
      let obj = new ToDo(this.currentUserId, this.toDo, false)
      this.dataService.addToDo(obj).subscribe(data => {
        this.currentArr.unshift(data);
      })
      this.addNew = false;
    }
  }

  updateItem() {
    if (this.toDo.length > 0) {
      let obj = {
        userId: this.currentUserId,
        title: this.toDo,
        completed: false
      }
      this.dataService.updateToDo(this.currentUserId, obj).subscribe(data => {
        this.currentArr.splice(this.currentId, 1, data);
      },
        error => {
          console.log(error);
        })
      this.addNew = false;
    }
  }

  deleteItem() {
    this.dataService.deleteToDo(this.currentUserId).subscribe(data => {
      this.currentArr.splice(this.currentId, 1);
    },
      error => {
        console.log(error);
      })
    this.del = false;
  }
}