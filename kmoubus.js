window.onload=function funcKMOUBUS(){
	now = new Date();
	nowYear = now.getFullYear();
	nowMonth = now.getMonth() + 1;
	nowDay = now.getDate();
	nowHour = now.getHours();
	nowMin = now.getMinutes();
	nowSec = now.getSeconds();
	nowWeek = now.getDay();
	nowWeekText = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];

	//아래 4줄은 쓰레기이나 삭제시 오류 발생
	nowOnlyTime = now;
	nowOnlyTime.setFullYear(arr1[1].getFullYear());
	nowOnlyTime.setMonth(arr1[1].getMonth());
	nowOnlyTime.setDate(arr1[1].getDate());
	
	nowVacation = true; //방학일경우 true, 학기중이면 false

	//순환버스용 요일, 방학 여부 판단
	if (nowWeek == 0 || nowWeek == 6) {
		arrShuttle = arr1;
	}
	else if (nowVacation == true) {
		arrShuttle = arr2;
	}
	else {
		arrShuttle = arr3;
	}

	//순환버스 다음 출발시간 찾기
	var shuttleLoop = 1;
	while (now.getTime() >= arrShuttle[shuttleLoop].getTime()) {
		shuttleLoop++;
	}

	//시내버스용 요일 판단
	if (nowWeek == 0 ) {
		arr190 = arr4;
	}
	else if (nowWeek == 6) {
		arr190 = arr5;
	}
	else {
		arr190 = arr6;
	}

	//190번 시내버스 다음 출발시간 찾기 
	var cityLoop = 1;
	while (now.getTime() >= arr190[cityLoop].getTime()) 
		cityLoop++;
	

	//현재시간 출력
	for (i=0;i<document.getElementsByClassName("nowTime").length;i++)
		document.getElementsByClassName("nowTime")[i].innerHTML = nowYear + "." + addZero(nowMonth) + "." + addZero(nowDay) + ". " + nowWeekText[nowWeek]
														+ " " + addZero(nowHour)+":"+addZero(nowMin)+":"+addZero(nowSec);
	//다음 순환버스 출발시간 출력
	for (i=0;i<document.getElementsByClassName("nextShuttle").length;i++)
		document.getElementsByClassName("nextShuttle")[i].innerHTML = addZero(arrShuttle[shuttleLoop].getHours()) + ":" + addZero(arrShuttle[shuttleLoop].getMinutes()) ;
	
	//다음 순환버스 출발시간까지 남은시간 출력
	for (i=0;i<document.getElementsByClassName("nextShuttleRemaining").length;i++)
		document.getElementsByClassName("nextShuttleRemaining")[i].innerHTML = Math.floor( (arrShuttle[shuttleLoop].getTime() - now.getTime()) / 60000 )  ;

	//그 다음 순환버스 출발시간 출력
	for (i=0;i<document.getElementsByClassName("nNextShuttle").length;i++)
		document.getElementsByClassName("nNextShuttle")[i].innerHTML = addZero(arrShuttle[shuttleLoop+1].getHours()) + ":" + addZero(arrShuttle[shuttleLoop+1].getMinutes()) ;
	
	//그 다음 순환버스 출발까지 남은시간 출력
	for (i=0;i<document.getElementsByClassName("nNextShuttleRemaining").length;i++)
		document.getElementsByClassName("nNextShuttleRemaining")[i].innerHTML = Math.floor( (arrShuttle[shuttleLoop+1].getTime() - now.getTime()) / 60000 )  ;

	//다음 190번 시내버스 출발시간 출력
	for (i=0;i<document.getElementsByClassName("next190").length;i++)
		document.getElementsByClassName("next190")[i].innerHTML = addZero(arr190[cityLoop].getHours()) + ":" + addZero(arr190[cityLoop].getMinutes()) ;
	
	//다음 190번 시내버스 출발까지 남은시간 출력
	for (i=0;i<document.getElementsByClassName("next190Remaining").length;i++)
		document.getElementsByClassName("next190Remaining")[i].innerHTML = Math.floor( (arr190[cityLoop].getTime() - now.getTime()) / 60000 )  ;

	//그 다음 190번 시내버스 출발시간 출력
	
	for (i=0;i<document.getElementsByClassName("nNext190").length;i++)
		document.getElementsByClassName("nNext190")[i].innerHTML = addZero(arr190[cityLoop+1].getHours()) + ":" + addZero(arr190[cityLoop+1].getMinutes()) ;
	//그 다음 190번 시내버스 출발까지 남은시간 출력
	
	for (i=0;i<document.getElementsByClassName("nNext190Remaining").length;i++)
		document.getElementsByClassName("nNext190Remaining")[i].innerHTML = Math.floor( (arr190[cityLoop+1].getTime() - now.getTime()) / 60000 )  ;
	
	//0.5초마다 갱신
	setTimeout(funcKMOUBUS, 500);
}

function addZero(i){//숫자 두 자리 표기를 위함
	if (i < 10) {i = "0" + i};
	return i;
}