
function getDayWeek(dia : number) {  
    
    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dayInitials : string = weekDays[dia].slice(0,3)
    const day : string = weekDays[dia]

    return {
        day ,
        dayInitials  
    }
    

}

export default getDayWeek