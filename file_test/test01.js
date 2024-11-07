/* const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 5,
        maxCapacity: 8,
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 25,
        days: "TTh",
        instructor: "Sis A",
      },

      {
        sectionNum: 3,
        roomNum: "JS 101",
        enrolled: 30,
        days: "MF",
        instructor: "Tom C",
      },
      {
        sectionNum: 4,
        roomNum: "PRO_F 201",
        enrolled: 15,
        days: "TWTh",
        instructor: "Liz M",
      },
      {
        sectionNum: 5,
        roomNum: "LIT 102",
        enrolled: 45,
        days: "TThF",
        instructor: "Tim C",
      },
    ],
     enrollStudent: function (sectionNum) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
      }
    },
    dropStudent: function (sectionNum) {
      // find the right section...Array.findIndex will work here
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
      }
    }, 

    changeEnrollment: function (sectionNum, add = true) {
        // find the right section...Array.findIndex will work here
        const sectionIndex = this.sections.findIndex(
          (section) => section.sectionNum == sectionNum
        );
        if (sectionIndex >= 0) {
          if (add) {
            this.sections[sectionIndex].enrolled++;
          } else {
            this.sections[sectionIndex].enrolled--;
          }
          renderSections(this.sections);
        }
      }
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections); */

  const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      {
        sectionNum: 1,
        roomNum: "STC 353",
        enrolled: 0,
        maxCapacity: 20, // Max capacity added
        days: "TTh",
        instructor: "Bro T",
      },
      {
        sectionNum: 2,
        roomNum: "STC 347",
        enrolled: 0,
        maxCapacity: 25, // Max capacity added
        days: "TTh",
        instructor: "Sis A",
      },
      {
        sectionNum: 3,
        roomNum: "JS 101",
        enrolled: 0,
        maxCapacity: 30, // Max capacity added
        days: "MF",
        instructor: "Tom C",
      },
      {
        sectionNum: 4,
        roomNum: "PRO_F 201",
        enrolled: 0,
        maxCapacity: 35, // Max capacity added
        days: "TWTh",
        instructor: "Liz M",
      },
      {
        sectionNum: 5,
        roomNum: "LIT 102",
        enrolled: 0,
        maxCapacity: 40, // Max capacity added
        days: "TThF",
        instructor: "Tim C",
      },
    ],
    
    enrollStudent: function (sectionNum) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        const section = this.sections[sectionIndex];
        if (section.enrolled < section.maxCapacity) {
          this.sections[sectionIndex].enrolled++;
          renderSections(this.sections);
        } else {
          alert(`Section ${sectionNum} is full. Cannot enroll.`);
        }
      }
    },
  
    dropStudent: function (sectionNum) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0 && this.sections[sectionIndex].enrolled > 0) {
        this.sections[sectionIndex].enrolled--;
        renderSections(this.sections);
      }
    },
  
    changeEnrollment: function (sectionNum, add = true) {
      const sectionIndex = this.sections.findIndex(
        (section) => section.sectionNum == sectionNum
      );
      if (sectionIndex >= 0) {
        const section = this.sections[sectionIndex];
        if (add) {
          if (section.enrolled < section.maxCapacity) {
            this.sections[sectionIndex].enrolled++;
          } else {
            alert(`Section ${sectionNum} is full. Cannot enroll.`);
          }
        } else {
          if (section.enrolled > 0) {
            this.sections[sectionIndex].enrolled--;
          }
        }
        renderSections(this.sections);
      }
    }
  };
  
  function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
  }
  
  function renderSections(sections) {
    const html = sections.map(
      (section) => `<tr>
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled} / ${section.maxCapacity}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
  }
  
  document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
  });
  
  document.querySelector("#dropStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.dropStudent(sectionNum);
  });
  
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);
  