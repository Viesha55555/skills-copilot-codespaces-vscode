function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'Python'];
    var member = {
        name: 'Nguyen Van A',
        age: 18,
        skills: skills,
        showInfo: function () {
            console.log('Name: ' + this.name);
            console.log('Age: ' + this.age);
        }
    };
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member['name']);
    console.log(member['age']);
    console.log(member['skills']);
    member['showInfo']();
    console.log(member);
    console.log(member['name']);
    console.log(member['age']);
    console.log(member['skills']);
    member['showInfo']();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
    console.log(member.name);
    console.log(member.age);
    console.log(member.skills);
    member.showInfo();
    console.log(member);
}