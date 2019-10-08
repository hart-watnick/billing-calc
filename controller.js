"use strict";

function CalendarController(){
    const vm= this;

    vm.billDate= null;

    vm.servDate= null;
    
    
    vm.submitDate = (date) =>{
        console.log(date.valueAsDate);
    }
}


angular
    .module("App")
    .controller("CalendarController", CalendarController);