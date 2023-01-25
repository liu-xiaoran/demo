package com.example.javatest;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.HashMap;

@SpringBootTest
class JavaTestApplicationTests {

    @Test
    void contextLoads() {
        System.out.println("start");

//        testStr();

//        testStrHashmap();




    }

    private void testStrHashmap(){
        String a = "t1";

        HashMap map = new HashMap<String, String>();

        map.put("t1", "aa");

        String b = new String("t1");

        System.out.println(map.get(a).toString());

        System.out.println(a==b);

        System.out.println(map.get(b).toString());
    }

    private void testStr(){
        String a = "t3";

        String b = new String("t3");

        String c = "t31".substring(0,2);

        System.out.println(c);

        System.out.println(a == b);

        System.out.println(a.equals(b));

        System.out.println(a.compareTo(b));

        System.out.println(a == c);

        System.out.println(a.equals(c));
    }


}
