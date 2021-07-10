function ajax() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var response = JSON.parse(this.responseText);
            // console.log(response);


            var Jgrocery = response.Items;
            // console.log(Jgrocery);

            var table = "";

            for (Items of Jgrocery) {
                table +=`

                    <tr class="space fw-bold">
                        <th scope="row">${Items.SlNo}</th>
                        <td>${Items.Name}</td>
                        <td>${Items.Qty}</td>
                        <td>${Items.Unit}</td>
                        <td>${Items.Department}</td>
                        <td>${Items.Notes}</td>
                    </tr>`

            }


            // console.log(output);
            document.getElementById("demo").innerHTML = table;
        }
    }
    xhttp.open("GET", "grocery.json", true);
    xhttp.send();

}

