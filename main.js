const txt1 = document.querySelector("#txtContent")
const btn = document.querySelector("button")
const res = document.querySelector(".result")
const sel = document.querySelector("#sep")

const str = "enpetals4u@gmail.com hello world enpetals4u1@gmail.com enpetals4u2@gmail.com"
txt1.value = str

btn.addEventListener("click",getEmails)

function getEmails() {
    const temp = txt1.value
    // const regexp = /([A-Za-z0-9.-_]+[@]+[a-z]+[.]+[a-z]+)/gi
    const regexp = /([A-Za-z0-9.-_]+@+[A-Za-z0-9.-_]+\.[A-Za-z0-9.-_]+)/gi
    const emailsRaw = temp.match(regexp)
    const emails = []
    if (emailsRaw != null) {
        emailsRaw.forEach(email => {
            if(!emails.includes(email)){
                emails.push(email)
            }
            
        });

    }
    const div = document.createElement("div")
    div.textContent = `Found Emails : ${emails.length}`
    div.style.textAlign = "center"
    div.style.margin = "1rem"
    document.body.appendChild(div)
    res.append(div)
    if(emails.length > 0){
        const txta = document.createElement("textarea")
        const myEmails = emails.join(sep.value)
        txta.value = myEmails
        res.append(txta)
        txta.focus()
        txta.addEventListener("click",()=>{
            console.log("selected")
            txta.select()
        })
        
        downBtn = document.createElement("button")
        downBtn.textContent = `Download ${emails.length} Emails`
        res.append(downBtn)
        downBtn.addEventListener("click",()=>{
            const fileName = "Emails.txt"
            const a = document.createElement("a")
            a.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(myEmails))
            a.setAttribute('download',fileName)
            a.style.display = "none"
            document.body.append(a)
            a.click()
            document.body.removeChild(a)


        })
    }
    
    console.log(emailsRaw)
    console.log(emails)




}