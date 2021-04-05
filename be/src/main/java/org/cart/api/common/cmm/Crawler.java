package org.cart.api.common.cmm;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import io.github.bonigarcia.wdm.WebDriverManager;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

class reviewer {@Override public String toString() {
    return "<"+itemNum+">"+score+", "+reviewTitle+ ", "
            +reviewContent+", "+regDate;}
    String score; String reviewTitle; String reviewContent; String regDate; String itemNum;

    public reviewer(
            String score, String reviewTitle,
            String reviewContent, String regDate, String itemNum){
        super();
        this.score = score;
        this.reviewTitle = reviewTitle;
        this.reviewContent = reviewContent;
        this.regDate = regDate;
        this.itemNum = itemNum;}

    public String getScore() {return score;}
    public void setScore(String score) {this.score = score;}
    public String getReviewTitle() {return reviewTitle;}
    public void setReviewTitle(String reviewTitle) {this.reviewTitle = reviewTitle;}
    public String getReviewContent() {return reviewContent;}
    public void setReviewContent(String reviewContent) {this.reviewContent = reviewContent;}
    public String getRegDate() {return regDate;}
    public void setRegDate(String regDate) {this.regDate = regDate;}
    public String getItemNum() {return itemNum;}
    public void setItemNum(String itemNum) {this.itemNum = itemNum;}}

public class Crawler {
    public static List<reviewer> exhbnAutoUrl(List<reviewer> revList, ChromeDriver driver, String url, String number){
        Logger logger = LoggerFactory.getLogger(Crawler.class);
        driver.get(url);
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        WebElement rev = driver.findElementByClassName("prdContents detail");
        List<WebElement> ls = rev.findElements(By.cssSelector("li"));

        for(int i=0;i<ls.size();i++) {
            String reviewTitle = ls.get(i).findElement(By.className("bbsTitle")).getText();
            String reviewContent = ls.get(i).findElement(By.className("bbsText")).getText();
            String score = ls.get(i).findElement(By.className("prdStarIcon")).getText();
            String regDate = ls.get(i).findElement(By.className("bbsItemInfoList")).getText();
            revList.add(new reviewer(reviewTitle,reviewContent,score,regDate,number));
            logger.info(revList.get(revList.size()-1).toString());}
        return revList;}

	/*(예외처리) 6, 가도 가도 또 가고 싶은 여행지의 스테디셀러
	   	       7, 가슴 탁 트이는 속초여행
	   	       24. 대포항에서 혼자 하는 여행
	   	       47. 설악 관광특구
	   	       62. 설악산국립공원의 비경을 만나다
	   	       65. 설악파인리조트 아쿠아펀
	   	       75. 속초 음악불꽃크루즈 2021
	   	       76. 속초 응골딸기나라 (관광두레 주민사업체)
	   	       81. 속초관광수산시장 닭강정골목
	   	       89. 속초연안 배낚시
	   	       90. 속초의 석호에서 만나는 특별한 체험
	   	       93. 속초해안로
	   	       126. 장사어촌계 배낚시
	   	       130. 저마다 가을 색을 뽐내는 속초로 떠나는 여행 [웰촌]
	   	       135. 지친 몸과 마음을 치유하는 시간
	   	       140. 척산온천지구
	   	       148. 청초호 둘레길 */

    public static void main(String[] args) {
        WebDriverManager.chromedriver().setup();
        ChromeDriver driver = new ChromeDriver();
        driver.get("https://www.google.com/");
        String reviewURL = "https://tickets.interpark.com/goods/";
        List<reviewer> revList = new ArrayList<>();


        exhbnAutoUrl(revList, driver,reviewURL+"20009147#","1");      //앙리 마티스 특별전
        exhbnAutoUrl(revList, driver,reviewURL+"20009843#","2");      //한겨울 지나 봄 오듯 - 세한歲寒 평안平安
        exhbnAutoUrl(revList, driver,reviewURL+"21001037#","3");      //필립 콜버트 전 | Philip Colbert
        exhbnAutoUrl(revList, driver,reviewURL+"20010548#","4");      //미켈란젤로 특별전
        exhbnAutoUrl(revList, driver,reviewURL+"20007609#","5");    //팀랩: 라이프



        MakeCsv.createCSV(revList, "ReviewerList", "src/main/resources"); //csv파일 생성
        driver.close();}}


