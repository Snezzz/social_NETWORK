import { Injectable } from '@angular/core';
import {Notes} from "./walls";
import {Profile} from "./profile";

@Injectable()
export class ProfileService {

  constructor() {
  }

  getNotes(): Notes[] {
    return [
      {
        "id": 1,
        "Title": "My cat is looking for you",
        "Date": "16 сентября 2017 г.",
        "Description": "Здесь у нас сама запись",
        "Likes": 2
      },
      {
        "id": 2,
        "Title": "Can you help us on Sunday?",
        "Date": "15 сентября 2017 г.",
        "Description": "Здесь у нас сама запись",
        "Likes": 10
      },
      {
        "id": 3,
        "Title": "Look! New photos are here",
        "Date": "10 сентября 2017 г.",
        "Description": "Здесь у нас сама запись",
        "Likes": 12
      },
      {
        "id": 4,
        "Title": "Last Saturday",
        "Date": "7 сентября 2017 г.",
        "Description": "Здесь у нас сама запись",
        "Likes": 1
      }
    ];
  }

  getInformation(): Profile[] {
    return [
      {
        "id": 1,
        "FirstName": "Кот",
        "LastName": "Матроскин",
        "NickName": "Cat",
        "Rating": "5/10",
        "Information": "Ищу себе хозяина на выходные! Звоните по телефону или пишите сюда",
        "Image": "./assets/logo.png"

      }
    ]
  }
}
