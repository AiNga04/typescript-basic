var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var message = "Hello, World!";
console.log(message);
var userName = "Zyna Dev";
function welcome(userName) {
    return "Hello, ".concat(userName);
}
console.log(welcome(userName));
console.log(userName.toUpperCase());
console.log(welcome(userName));
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
    console.log(number * 2);
});
// Number
var num = 3;
console.log("number: " + num);
// String
var str = "Hello, Zyna!";
console.log(str);
// Boolean
var isTrue = true;
if (isTrue) {
    console.log("isTrue: ".concat(isTrue));
}
// Object
var user = {
    name: "Zyna Dev",
    age: 21,
};
console.log(user);
// Array
var array = [1, 2, 3, 4, 5];
console.log(array);
var skills = ["Zyna", 21];
skills.push("dev");
console.log(skills);
// Tuple
var skill2 = ["Nga", 21];
console.log(skill2);
var skill3 = ["Hello"];
console.log(skill3);
// Enum
var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDING"] = "PENDING";
    API_STATUS["FULFILLING"] = "FULFILLING";
    API_STATUS["REJECTED"] = "REJECTED";
})(API_STATUS || (API_STATUS = {}));
var pending = API_STATUS.PENDING;
console.log(pending);
var API;
(function (API) {
    API[API["PENDING"] = 0] = "PENDING";
    API[API["FULFILLING"] = 1] = "FULFILLING";
    API[API["REJECTED"] = 2] = "REJECTED";
})(API || (API = {}));
var pending2 = API.PENDING;
console.log(pending2);
// Any Type
var anyType = "any type";
console.log("Any: ".concat(anyType));
anyType = true;
console.log("Any: ".concat(anyType));
// Void Type
var sum = function (a, b) { return a + b; };
console.log(sum(2, 6));
var hello = function (message) {
    console.log("Hello, ".concat(message));
};
hello("Nga");
// Never
function handleError(errorMessage) {
    throw new Error(errorMessage);
}
// Union type
function sumNumberOrString(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    else if (typeof a === "string" && typeof b === "string")
        return a.concat(b);
    return "Invalid parameters";
}
console.log("SumNum: ".concat(sumNumberOrString(2, 6)));
console.log("SumString: ".concat(sumNumberOrString("Zyna", "dev")));
console.log("SumError: ".concat(sumNumberOrString("Nga", 21)));
function sumNumberOrStringUnion(a, b) {
    if (typeof a === "number" && typeof b === "number")
        return a + b;
    else if (typeof a === "string" && typeof b === "string")
        return a.concat(b);
    return "Invalid parameters";
}
console.log("SumNum: ".concat(sumNumberOrStringUnion(2, 6)));
console.log("SumString: ".concat(sumNumberOrStringUnion("Zyna", "dev")));
console.log("SumError: ".concat(sumNumberOrStringUnion("Nga", 21)));
//Default Parameters
function hi(hi) {
    if (hi === void 0) { hi = 'Hi Nga'; }
    console.log(hi);
}
console.log(hi("Hi Zyna"));
console.log(hi());
var createArray = function () {
    var spread = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        spread[_i] = arguments[_i];
    }
    return spread;
};
var myArray = createArray(1, 2, 3, 4, 5);
console.log(myArray);
var arr0 = myArray[0], rest = myArray.slice(1);
console.log(arr0);
console.log(rest);
function addNew(a, b) {
    return a + b;
}
console.log("addNum: ".concat(addNew(1, 4)));
console.log("addString: ".concat(addNew('Hello', ' Zyna')));
// Class
var Card = /** @class */ (function () {
    function Card(name, price, productionDate) {
        this.name = name;
        this.price = price;
        this.productionDate = productionDate;
    }
    Card.prototype.getName = function () {
        return this.name;
    };
    Card.prototype.getPrice = function () {
        return this.price;
    };
    Card.prototype.getProductionDate = function () {
        return this.productionDate;
    };
    Card.prototype.setName = function (name) {
        this.name = name;
    };
    Card.prototype.setPrice = function (price) {
        if (price < 0) {
            throw new Error("price must be greater than 0");
        }
        this.price = price;
    };
    Card.prototype.getDetails = function () {
        return "Card: ".concat(this.name, ", Price: $").concat(this.price, ", Production Date: ").concat(this.productionDate);
    };
    return Card;
}());
var itachi = new Card("Itachi", 50000, new Date());
console.log(itachi.getName());
itachi.setName("Itachi Luxury");
console.log(itachi.getDetails());
// Class TS
var Car = /** @class */ (function () {
    function Car(name, price, productionDate) {
        this._name = name;
        this._price = price;
        this._productionDate = productionDate;
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (_name) {
            this._name = _name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (_price) {
            if (_price < 0) {
                throw new Error("Price must be greater than 0");
            }
            this._price = _price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "productionDate", {
        get: function () {
            return this._productionDate;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "detail", {
        get: function () {
            return "\n    Car: ".concat(this._name, "\n    Price: ").concat(this._price, "\n    Production Date: ").concat(this._productionDate);
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var toyota = new Car("Toyota", 50000, new Date());
toyota.name = "Toyota Camry";
console.log(toyota.detail);
//Inheritance (Kế thừa)
var Mazda = /** @class */ (function (_super) {
    __extends(Mazda, _super);
    function Mazda(name, price, productionDate, color) {
        var _this = _super.call(this, name, price, productionDate) || this;
        _this._color = color;
        return _this;
    }
    Object.defineProperty(Mazda.prototype, "color", {
        get: function () {
            return this._color;
        },
        //Overwrite
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mazda.prototype, "detail", {
        get: function () {
            return "\n    Car: ".concat(this.name, "\n    Color: ").concat(this._color, "\n    Price: ").concat(this.price, "\n    Production Date: ").concat(this.productionDate);
        },
        enumerable: false,
        configurable: true
    });
    return Mazda;
}(Car));
var mazda = new Mazda("Mazda", 60000, new Date(), "Red");
console.log(mazda.detail);
//Static
var Circle = /** @class */ (function () {
    function Circle() {
        this.num = 100;
    }
    Circle.calculateArea = function (radius) {
        return this.pi * radius * radius;
    };
    Circle.pi = 3.14;
    return Circle;
}());
var num1 = new Circle();
console.log(num1.num);
console.log(Circle.calculateArea(10));
// Abstract Classes
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._firstName + " " + this._lastName;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return Employee;
}());
var EmployeeIT = /** @class */ (function (_super) {
    __extends(EmployeeIT, _super);
    function EmployeeIT(firstName, lastName, salary) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        return _this;
    }
    EmployeeIT.prototype.getSalary = function () {
        return this.salary;
    };
    return EmployeeIT;
}(Employee));
var EmployeeIOT = /** @class */ (function (_super) {
    __extends(EmployeeIOT, _super);
    function EmployeeIOT(firstName, lastName, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    EmployeeIOT.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return EmployeeIOT;
}(Employee));
var e1 = new EmployeeIT('Zyna', 'Dev', 1500);
var e2 = new EmployeeIOT('Zyna', 'Dev', 10, 120);
console.log(e1.compensationStatement());
console.log(e2.compensationStatement());
function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = {
    firstName: 'Zyna',
    lastName: 'Dev',
};
console.log(getFullName(person));
var User = /** @class */ (function () {
    function User(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    User.prototype.getSalary = function (salary) {
        return this.salary;
    };
    return User;
}());
var zyna = new User('Zyna', 21, 1000);
console.log(zyna);
