function NewYear()
	{
	    var today       = new Date();
	    var bigDay      = new Date("January 1, 2021");
	    var timeLeft    = (bigDay - today);
	    var e_daysLeft  = timeLeft / (3600 * 24 * 1000);
	    var daysLeft    = Math.floor(e_daysLeft);
	    var e_hoursLeft = (e_daysLeft - daysLeft)*24;
	    var hoursLeft   = Math.floor(e_hoursLeft);
	    var e_minsLeft  = (e_hoursLeft - hoursLeft)*60;
	    var minsLeft    = Math.floor(e_minsLeft);
	    var secondsLeft = Math.floor((e_minsLeft - minsLeft)*60);
		if (bigDay.getTime() > today.getTime())
        document.getElementById("test").innerHTML = '<font color=#7fffd4>�� ������ ����: <b>'+ daysLeft +'</b> ����, <b>'+ hoursLeft +'</b> �����, <b><br>'+ minsLeft +'</b> �����, <b>'+ secondsLeft +'</b> ������</font>'
 				   else
        document.getElementById("test").innerHTML = '����������� � <font color=red>����� 2021 �����</font>!!!'
	}
setInterval("NewYear()", 1000);