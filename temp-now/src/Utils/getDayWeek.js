"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDayWeek(dia) {
    const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dayInitials = weekDays[dia].slice(0, 3);
    const day = weekDays[dia];
    return {
        day,
        dayInitials
    };
}
exports.default = getDayWeek;
