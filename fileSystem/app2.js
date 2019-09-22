const fs = require('fs');

fs.mkdir('tutorial', (err) => {
    if(err)
        console.log(err)
    else
    fs.writeFile('./tutorial/example.txt', '123', (err) => {
        if(err)
            console.log(err)
        else   
            console.log('successfully created file')
    })
})

fs.unlink('./tutorial/example.txt', (err) => {
    if(err)
        console.log(err)
    else
        fs.rmdir('tutorial', (err) => {
            if(err)
                console.log(err)
            else
                console.log('successfully deleted file and folder')
        })
})


