
             function generateqr() {
                var groupnumber = document.getElementById('number').value;
                var name = document.getElementById('name').value;
                var year = document.getElementById('year').value;
                var abstract = document.getElementById('abstract').value;
    
                console.log('Number: ' + number + " " + name + " " + year+" "+abstract );
    
                var url = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=Number:" +
                groupnumber+ "%0a Name: " + name + "%0a Year: " + year + "%0a link: "+ abstract ;

                console.log(url);
    
                var ifr = `<iframe src="${url}" height="200" width="200" class="img siuu" ></iframe>`;
    
                document.getElementById('qrcode').innerHTML = ifr;
            }

            const scriptURL = 'https://script.google.com/macros/s/AKfycbzBCt8up6LMYmO0lDm6sEhafBMZZXPTEp9wkyIPLsLaBa4qh6PfJp5hU0S0-nOIC3CyFw/exec'
            const form = document.forms['google-sheet']
     
                form.addEventListener('submit', e => {
                e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                  .catch(error => console.error('Error!', error.message))

                  setTimeout(function () {
                    let dataUrl = document
                      .querySelector("#qrcode")
                      .querySelector("img").src;
                    downloadURI(dataUrl, "qrcode.png");
                  }, 8000);
                })


 