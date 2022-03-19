import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  wordPairs: any[] = [];

  public username: string = 'Oscar';

  public displayModal: boolean = false;
  public modalError: boolean = false;

  public editingPairId: string = '';
  public editingWord1: string = '';
  public editingWord2: string = '';

  public word1: string = '';
  public word2: string = '';

  public msgAdded: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllWords();
  }
  getAllWords() {}

  addWords() {
    if (this.word1 === '' || this.word2 === '') {
      Swal.fire('Word Missing', 'Please provide two words', 'error');
      return;
    }
    const body = {
      word1: this.word1,
      word2: this.word2,
    };
  }

  editMode(id: string) {
    this.displayModal = true;
  }

  updatePair() {
    if (!this.displayModal && this.editingPairId === '') {
      return;
    }

    const body = {
      word1: this.editingWord1,
      word2: this.editingWord2,
    };

    if (body.word1 === '' || body.word2 === '') {
      this.displayModal = false;
      Swal.fire('Word Missing', 'Please provide two words', 'error');
      return;
    }
  }

  deletePair(id: string) {
    Swal.fire({
      title: `Do you want to delete it?`,
      showCancelButton: true,
      confirmButtonText: 'Delete',
    })
      .then((result) => {})
      .catch(console.log);
  }
}
