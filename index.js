let checkBoxWithLabelContainerEle = document.getElementById("checkBoxWithLabelContainer");

let checkBoxEle = document.createElement("input");
checkBoxEle.type= "checkbox";
checkBoxEle.id="checkbox";
checkBoxWithLabelContainerEle.appendChild(checkBoxEle);

let labelEle = document.createElement("label");
labelEle.setAttribute("for","checkbox");
labelEle.id = "checkboxLabel";
labelEle.textContent ="I am Label"
checkBoxWithLabelContainerEle.appendChild(labelEle);

function onClickCheckBoxStatusChange(){
    labelEle.classList.toggle("checked");
}
checkBoxEle.onclick = function(){
    onClickCheckBoxStatusChange();
}