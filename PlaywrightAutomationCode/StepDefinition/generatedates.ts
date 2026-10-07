import { Then } from "@cucumber/cucumber";
Then('generate dates',async function () {

    const Todaydate = new Date()
    console.log('today date:',Todaydate)
    const todatdateInIST = Todaydate.toLocaleDateString()
    console .log('today date in IST format:',todatdateInIST)
    const PastDate = new Date(Todaydate)
    PastDate.setDate(PastDate.getDate()-12)
    const PastDateInIST = PastDate.toLocaleDateString()
    console.log('past date before 12 days is:',PastDateInIST)
    const FutureDate = new Date(Todaydate)
    FutureDate.setDate(FutureDate.getDate()+10)
    const FutureDateInIST = FutureDate.toLocaleDateString()
    console.log('future date after 10 days is:',FutureDateInIST)
    const DisplayCompleteMonth = Todaydate.toLocaleDateString('en-us',{month : 'long'})
    console.log('complet month display is:',DisplayCompleteMonth)
    const DisplayShortMonth = Todaydate.toLocaleDateString('en-us',{month : 'short'})
    console.log('short month display is:',DisplayShortMonth)
    const year = Todaydate.getFullYear()
    const datee =Todaydate.getDate()
    const mon =Todaydate.getMonth()

    let DateFormat = datee +'-'+mon+'-'+year
    console.log(DateFormat)
     DateFormat = datee +'/'+mon+'/'+year
    console.log(DateFormat)
    
})
    
