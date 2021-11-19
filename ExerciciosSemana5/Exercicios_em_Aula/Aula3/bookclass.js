class Book {
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
        this.reserved = {
            lent: false,
            reader: ""
        };
    }

    lend(reader){
        this.reserved.lent = true;
        this.reserved.reeder = reader;
    }

    static sortByYear(booksArray){
        return booksArray.sort((a, b) => a.year - b.year);
    }
}

const HP1 = new Book("HARRY POTTER AND THE SORCERER'S STONE", "J.K. Rolling", 2001)
const HP2 = new Book("HARRY POTTER AND THE CHAMBER OF SECRET", "J.K. Rolling", 2002)
const HP3 = new Book("HARRY POTTER AND THE PRISONER OF AZKABAN ", "J.K. Rolling", 2004)
const HP4 = new Book("HARRY POTTER AND THE GOBLET OF FIRE", "J.K. Rolling", 2005)
const HP5 = new Book("HARRY POTTER AND THE ORDER OF THE PHOENIX ", "J.K. Rolling", 2007)
const HP6 = new Book("HARRY POTTER AND THE HALF-BLOOD PRINCE", "J.K. Rolling", 2009)
const HP7 = new Book("HARRY POTTER AND THE DEATHLY HALLOWS: PART 1", "J.K. Rolling", 2010)
const HP8 = new Book("HARRY POTTER AND THE DEATHLY HALLOWS: PART 2", "J.K. Rolling", 2011)

let booksArray = [HP8, HP7, HP6, HP5,  HP4, HP3, HP2, HP1]

HP4.lend("Johann")

console.log(HP4)


