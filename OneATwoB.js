const  OneATwoB = {

    num : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    answer : [],
    number: 0,
    record: '',

    makeAnswer : function(){
        for (var i=0; i<4; i++) {
            var index = Math.floor(Math.random()*this.num.length);
            this.answer.push(this.num[index]);
            this.num.splice(index, 1);
        }
    },
    
    judgeAnswer : function(inputAnswer){
        if(inputAnswer.length!=4 || !(isInt(inputAnswer-0)) || isRepeat(inputAnswer)) {
            error.innerHTML = '<div class="alert alert-danger" role="alert">輸入錯誤，只能輸入每位不能重複的四位數</div>';
        } else {
            var a = 0;
            var b = 0;
            for (var i=0; i<4; i++) {
                var index = this.answer.indexOf(inputAnswer[i]);
                if (index == i) {
                    a++;
                } else if(index!=-1){
                    b++;
                }
            }
            this.number += 1;
            if (a == 4) {
                alert('恭喜您用了' + this.number + '次，答對了最終的答案' + inputAnswer);
            }
            this.rederRecord(inputAnswer, a+'A'+b+'B');
        }
    },

    rederRecord : function(inputAnswer, result){
        this.record += '<tr><th scope="row">'+ this.number + '</th><td>' + new Date().toLocaleDateString() + ' ' +new Date().toLocaleTimeString() + '</td><td>'+ inputAnswer +'</td><td>'+ result +'</td></tr>';
    }

};
