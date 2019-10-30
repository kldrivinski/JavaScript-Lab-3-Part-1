// code from lab 1


class AddressBook {
    constructor() {
        this.contacts = [];
    }

    add(name, email, phone, relation) {
        this.contacts.push(new Contact(name, email, phone, relation));
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const book = new AddressBook();


console.log(book.contacts);

// display

function display() {
    document.querySelector("#contacts").innerHTML = ""; // clears for each load
    book.contacts.forEach((contact, index) => { // loops through contacts and logs their index
        const newRecord = document.createElement("div"); // creates a new div stored into a variable
        newRecord.classList.add("record"); // adds a class to the div
        newRecord.innerHTML = // adds the form content to the div
            `<p>Name: ${contact.name}</p>
        <p>Email: ${contact.email}</p>
        <p>Phone: ${contact.phone}</p>
        <p>Relation: ${contact.relation}</p>
        <i class="fa fa-trash" data-index="${index}" aria-hidden="true"></i>`;
        // safely appending text 
        const paragraphs = new.Entry.querySelectorAll("p");
        paragraphs[0].innerText += contact.name;
        document.querySelector("#contacts").appendChild(newRecord); // adds new div to the container div

    });

}

display();


// create function to delete

document.querySelector("#contacts").addEventListener("click", deleteContact);

function deleteContact(e) { // holds the event object
    if (e.target.classList.contains("fa-trash")) { // from the event object, references the class of the item clicked
        const index = e.target.getAttribute("data-index"); // from the event Object, references the attribute holding the index number
        book.deleteAt(index); // calls the delete function
        display();
    }
};


// call add function upon submission
const form = document.querySelector("form"); // stores reference to the form in a variable
form.addEventListener("submit", e => { // listens for submit and then calls a function holding the event object
    e.preventDefault(); // prevents the page from refreshing 
    const formData = new FormData(form); // built in class stored in a variable that holds the form data
    book.add( // calls the add function and pulls the parameters from the form
        formData.get("name"),
        formData.get("email"),
        formData.get("phone"),
        formData.get("relation"),

    )
    form.reset(); //resets the form
    display();
})

