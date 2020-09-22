alert("Привет, мир!");

function hideHeader() {
  if (document.getElementById("head").style.display === "flex") {
    document.getElementById("head").style.display = "none";
  } else {
    document.getElementById("head").style.display = "flex";
  }
};

function changeBlockPlace() {
    if (document.getElementById("columnsOfRow2First").style.order === "1") {
        document.getElementById("columnsOfRow2First").style.order = "2";
        document.getElementById("columnsOfRow2Second").style.order = "1";
        document.getElementById("columnsOfRow2Third").style.order = "3";
    } else {
        document.getElementById("columnsOfRow2First").style.order = "1";
        document.getElementById("columnsOfRow2Second").style.order = "2";
        document.getElementById("columnsOfRow2Third").style.order = "3";
    }
};
