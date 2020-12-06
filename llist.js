var linkedList = {
    content: [],
    push: function (val) {
        this.content.push(val);
    },
    pop: function () {
        this.content.pop();
    },
    display: function () {
        for (var i = 0; i < this.content.length; i++) document.querySelector("p").innerHTML += this.content[i] + " ";
    },
    remove: function (ind) {
        ind = parseInt(ind);
        if (ind < 0 || ind >= this.content.length) throw new RangeError("index out of range");
        else {
            for (var i = ind; i < this.content.length - 1; i++) {
                this.content[i] = this.content[i + 1];
            }
            this.content.pop();
        }
    },
    insert: function (ind, val) {
        for (var i = 0; i < this.content.length; i++)
            if (val == this.content[i]) throw new Error("Value already exists");
        if (ind < 0 || ind > this.content.length) {
            throw new RangeError("index out of range");
        } else {
            var temp = [];
            temp[this.content.length] = this.content[this.content.length - 1];
            for (var i = 0; i < ind; i++) temp[i] = this.content[i];

            for (var i = ind; i < this.content.length; i++) {
                temp[i + 1] = this.content[i];
            }
            temp[ind] = val;

            this.content = [];
            for (var i = 0; i < temp.length; i++) this.content[i] = temp[i];
        }

    }

}
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(1);
linkedList.pop();
linkedList.insert(2, 6);
linkedList.remove(3);
linkedList.display();
