
function displayDate(){
    //document.getElementById("output").value="helloaaaaaaaaaaaaaaaaaaaaaa\naaaaaaaaaaaa!";//显示数据
    var group_number=document.getElementById("group_number").value;
    //var data_type=document.getElementById("data_type").value;
    var data_min=parseInt(document.getElementById("data_min").value);
    var data_min_judge=document.getElementById("data_min").value;
    var data_max=parseInt(document.getElementById("data_max").value);
    var data_max_judge=document.getElementById("data_max").value;
    var GroupMinNumber=parseInt(document.getElementById("GroupMinNumber").value);
    var GroupMinNumber_judge=document.getElementById("GroupMinNumber").value;
    var GroupBigNumber=parseInt(document.getElementById("GroupBigNumber").value);
    var GroupBigNumber_judge=document.getElementById("GroupBigNumber").value;
    var random_len,random_group,random;
    var i,j,k;
    var string="",s="";
    var xiao_xie=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
    var da_xie=new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
    var da_xiao=new Array('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')
    //random=parseInt(Math.random()*(data_max-data_min+1)+data_min,10);//生成随机个整数
    //random_ding=Math.floor(Math.random()*(data_max-data_min+1)+data_min);//生成随机个整数2种方式均可
        if(GroupBigNumber<GroupMinNumber||GroupBigNumber_judge==""||GroupMinNumber_judge=="")
    alert("数据每组个数的范围输入不合理,请重新输入");
    else
    for(j=0;j<group_number;j++)
    {
        random_group=Math.floor(Math.random()*(GroupBigNumber-GroupMinNumber+1)+GroupMinNumber);
        if(document.getElementsByName("display_number")[1].checked)
        {string=string+random_group+"\n";}
        if(document.getElementsByName("data_type")[0].checked)
        {
            if(data_max<data_min||data_max_judge==""||data_min_judge=="")
            alert("请输入正确的数据范围");
            else
            for(i=0;i<random_group;i++)
            {
                random=parseInt(Math.random()*(data_max-data_min+1)+data_min,10);//生成随机整数
                s=random.toString();
                string=string+s;
                if(i<random_group-1)
                string+=" ";
            }
        }
        else if(document.getElementsByName("data_type")[1].checked)
        {
            if(document.getElementsByName("char")[2].checked)
            for(i=0;i<random_group;i++)
            {
                random=parseInt(Math.floor(Math.random()*52));//随机生成52个字母中的一个
                s=da_xiao[random];
                string=string+s;
                if(i<random_group-1)
                string+=" ";
            }
            else
            for(i=0;i<random_group;i++)
            {
                random=parseInt(Math.floor(Math.random()*26));//随机生成26个字母中的一个
                if(document.getElementsByName("char")[1].checked)
                s=xiao_xie[random];
                else
                s=da_xie[random];
                string=string+s;
                if(i<random_group-1)
                string+=" ";
            }
        }
        else
        {
            if(document.getElementsByName("char")[2].checked)
            for(i=0;i<random_group;i++)
            {
                random_len=parseInt(Math.floor(Math.random()*10)+1);
                for(k=0;k<random_len;k++)
                {
                    random=parseInt(Math.floor(Math.random()*52));//随机生成52个字母中的一个
                    s=s+da_xiao[random];
                }
                string=string+s;
                s="";
                if(i<random_group-1)
                string+=" ";
            }
            else
            {
                for(i=0;i<random_group;i++)
                {
                    random_len=parseInt(Math.floor(Math.random()*10)+1);
                    for(k=0;k<random_len;k++)
                    {
                        random=parseInt(Math.floor(Math.random()*26));//随机生成26个字母中的一个
                        if(document.getElementsByName("char")[0].checked)
                        s=s+da_xie[random];
                        else
                        s=s+xiao_xie[random];
                    }
                    string=string+s;
                    s="";
                    if(i<random_group-1)
                    string+=" ";
                }
            }
        }
        if(j<group_number-1)
        string=string+"\n";
    }
    document.getElementById("output").value=string; 
}
