 //estructuras de datos
/**
 * !--- tasks Queue ---! -> se usa para callbacks
 * est tipo fifo
 * es un objeto que hace referencia a:
 * 1) info resultado
 * 2) acciones cinsecuencia
 *
 *!--- micro tasks queue ---! -> se usa para 
 *
 * !--- event loop ---! -> es la encargada de ejecutar las tareas que se encuentran en el call stack y extrae los objetos de task queue y microtasks queue y los ejecuta, las tareas del microtasks tiene prioridad sobre las del call queue esto se llama event loop
 * !--- ciclo de vida de acción asincrona ---!
 * 1) cakk stack
 * 2) levanta hilo de Sistema operativo
 * 3) el hilo termina y emite un evento
 * 4) se pasa el obj resultado al event queue
 * 5) cuando el call stack esté vacio, event loop  toma acciones consecuencia y ejectua
 * hay foto
 *
 * me canismos de ma
 */

const anyFction =() =>{
  setTimeout(()=> // accion asincron a revisar el git de leon para ver el codigo completo 
}/*
 Promesas - promises
 asycn away
 mecanismo de aaciones asincronas
*/