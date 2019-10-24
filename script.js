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
book.add("ariana", "stariana@email.com", "3134520300", "bff");
book.add("jackleen", "jack@email.com", "3134520300", "guardian angel");
book.add("laurie", "laurie@email.com", "3134520300", "mother");
book.add("joseph", "joe@email.com", "3134520300", "father");
book.add("maureen", "mo@email.com", "3134520300", "sister");
book.add("william", "bill@email.com", "3134520300", "brother");

console.log(book.contacts);

book.deleteAt(1);

console.log(book.contacts);

function print(AddressBook) {
  for (const key of AddressBook.contacts) {
    console.log(key);
  }
}
print(book);
