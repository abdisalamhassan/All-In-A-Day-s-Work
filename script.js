function sevenAM() {
    var input_textarea = document.querySelector("#hour7am");
    var output_div = document.querySelector("#comment7am");
    var saveBtn = document.querySelector("#button7am");
  
    saveBtn.addEventListener("click", textContent);
  
    output_div.textContent = localStorage.getItem("content");
    input_textarea.value = localStorage.getItem("content");
  
    function updateOutput() {
      localStorage.setItem("content", textContent);
  
      
    }
  }