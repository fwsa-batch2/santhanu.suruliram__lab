package com.sanboi;

class myClass {
    private String name;

    public String getname() {
        return name;
    }
    public void setname(String name) {
        this.name = name;
    }
}


public class Encapsulated{
    public static void main(String[] args) {
        myClass obj = new myClass();
        obj.setname("sanboi");
        System.out.println(obj.getname());
    }
}

