package com.example.javatest;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

@SpringBootTest
class JavaTestApplicationTests {

    @Test
    void contextLoads() {
        System.out.println("start");

//        testStr();

//        testStrHashmap();

        testThreadPoolExecutor();

    }

    private <T,U> T[] arrayCopy(U[] original, int newLength, Class<? extends T[]> newType){

        /*src – the source array.
                srcPos – starting position in the source array.
        dest – the destination array.
                destPos – starting position in the destination data.
        length – the number of array elements to be copied.*/


        T[] copy = ((Object)newType == (Object)Object[].class)
                ? (T[]) new Object[newLength]
                : (T[]) Array.newInstance(newType.getComponentType(), newLength);
        System.arraycopy(original, 0, copy, 0,
                Math.min(original.length, newLength));
        return copy;

    }

    private void testThreadPoolExecutor(){

        BlockingQueue<Runnable> queue = new LinkedBlockingQueue<Runnable>();

        ThreadPoolExecutor pool = new ThreadPoolExecutor(5,10, 1000, TimeUnit.SECONDS,
                queue);

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
