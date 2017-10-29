export class ActiveTabService {
  isActiveTab = function (tab){
    return (window.location).toString().includes(tab);
  }
}
