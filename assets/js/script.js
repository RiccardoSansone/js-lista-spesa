// Consegna:
// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


let i = 0; //creo una variabile indice e la inizializzo a 0
const list = ['Riso', 'Zucca', 'Burro', 'Rosmarino']; //creo una variabile di tipo array e ci inserisco le stringhe che compongono la mia lista
const ul = document.getElementById('foglio'); //salvo in una variabile globale il nodo della dom 
while(i <= 3){ //inizio il ciclo while dichiarando la sua condizione e inserisco al suo interno quello che dovrá eseguire per ogni giro
    let elementList = list[i]; //salvo in una variabile un singolo elemento della lista
    let foglio = document.createElement('li'); //creo un elemento della dom e lo salvo in una variabile 
    foglio.innerHTML = elementList //scrivo all'interno dell'elemento della dom inserndogli il valore della variabile creata precedentemente
    ul.append(foglio); //appendo l'elemento creato con il suo contenuto al nodo della dom 

    i++ //incremento il valore dell'indice e gli faccio ripetere il giro
}





























