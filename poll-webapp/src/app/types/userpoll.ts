export class UserPoll{

private userId : string;
private questionId: string;
private optionId: string;

constructor( userId: string, questionId: string, optionId: string)
{
  this.userId = userId;
  this.questionId = questionId;
  this.optionId = optionId;
}

}
