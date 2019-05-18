var music = document.getElementById('music');
        var photo = document.getElementById('music-photo');
        var title = document.getElementById('title');
        var musicSet = ['一曲相思.mp3','不将就.mp3','东西.mp3','云烟成雨.mp3','侧脸.mp3','倔强.mp3','假装.mp3',
        '光年之外.mp3','去年夏天.mp3','口是心非.mp3','可不可以.mp3','可乐.mp3','可能否.mp3','听说.mp3',
        '夜空中最亮的星.mp3','天亮以前说再见.mp3','岁月神偷.mp3','往后余生.mp3','感谢你曾来过.mp3',
        '斑马斑马.mp3','最美的期待.mp3','江南.mp3','沙漠骆驼.mp3','生僻字.mp3','盗将行.mp3',
        '红色高跟鞋.mp3','老街.mp3','讲真的.mp3','逝年.mp3','陷阱.mp3','预谋.mp3'];
        var btnSet = document.getElementsByClassName('btn');
        var btnTextSet = ['随机切歌','上一首','暂停','下一首','≡'];
        var btnValueSet = ['∑','《','★','》','≡'];
        var musicIndex=0;
        var listArea = document.getElementById('list-item');
        //console.log(typeof(btnSet[0].textContent));
        //console.log(btnSet);
        music.addEventListener('ended', function () {  
            down();
        }, false);
        function listAreaInit(){
            listArea.style.width='400px';
            listArea.style.height='10px';
            listArea.style.animationName='move-down';
            listArea.style.display='none';
            disappear();
        }
        ~function (){
            for(var i=0,len=btnSet.length;i<len;i++){
                btnSet[i].index=i;
                btnSet[i].onmouseover = function(){
                    var text = document.getElementsByClassName('btn'+this.index)[0];
                    text.innerHTML=btnTextSet[this.index];
                    if(this.index===4){
                        listArea.style.height='300px';
                        listArea.style.width='135px';
                        listArea.style.animation='move-up .1s';
                        listArea.style.animationFillMode='forwards';
                        appear();
                        listArea.style.display='block';
                    }else if(this.index==0){
                        text.style.fontSize='17px';
                    }else{
                        text.style.fontSize='13px';
                    }
                }
                btnSet[i].onmouseout = function(){
                    var text = document.getElementsByClassName('btn'+this.index)[0];
                    text.innerHTML=btnValueSet[this.index];
                    text.style.fontSize='20px';
                    if(this.index===4){
                        disappear();
                        /**/
                    }
                }
            }
        }();
        function random(){
            var randomNumber=Math.floor(Math.random()*(musicSet.length));
            musicIndex=randomNumber;
            music.src='mp3/'+musicSet[musicIndex];
            document.getElementById('title').innerHTML=musicSet[musicIndex].split('.')[0];
        };
        function up(){
            if(--musicIndex===-1)
            musicIndex=musicSet.length-1;
            music.src='mp3/'+musicSet[musicIndex];
            document.getElementById('title').innerHTML=musicSet[musicIndex].split('.')[0];
        }
        function down(){
            if(++musicIndex===musicSet.length)
            musicIndex=0;
            music.src='mp3/'+musicSet[musicIndex];
            title.value=musicSet[musicIndex];
            document.getElementById('title').innerHTML=musicSet[musicIndex].split('.')[0];
        }
        function state(){
            if(music.paused===false){
                music.pause();
                photo.style.animationPlayState="paused";
            }
            else {
                music.play();
                photo.style.animationPlayState="running";
            }
        }

        
        var listItem=document.getElementById('listItem');
        var listItems='';
        var flag=false;
        function appear(){
            var i=0;
            if(!flag)
            musicSet.forEach(element => {
                /*console.log(element);*/
                this.index=i++;
                //console.log(this.index);
                listItems+=("<li id=\"item"+(this.index+1)+"\" class=item >"+(this.index+1)+element.split('.')[0]+'</li>');
                flag=true;
            });
            listItem.innerHTML=listItems;
        }
        function disappear(){
            listItems=''
            listItem.innerHTML=listItems;
            flag=false;
        }
        
