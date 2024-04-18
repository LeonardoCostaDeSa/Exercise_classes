class Student {
    constructor(name_student, id, course,...classes_list){
        this.name_student = name_student;
        this.id = id;
        this.course = course;
        this.classes_list = classes_list;
    }
        
        first_class (){
            return this.classes_list[0]
        }
        last_class (){
            return this.classes_list[this.classes_list.length-1]
        } 
    
}

const student1 = new Student(
    'Leo', 
    '123456', 
    'Computer Science', 
    'Math', 'Programming', 'UI/UX'
    )
const student2 = new Student(
    'Zé',
    '154278',
    'Medicine',
    'Pharmacology', 'Anatomy', 'Pathology' 
)

console.log(student1.first_class())
console.log(student1.last_class())
console.log(' ')
console.log(student2.first_class())
console.log(student2.last_class())
