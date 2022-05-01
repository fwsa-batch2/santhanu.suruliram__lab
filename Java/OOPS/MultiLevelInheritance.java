class father{
    void fatherFunction() {
        System.out.println("father here");
    }
}
class son extends father{
    void sonFunction(){
        System.out.println("son here");
    }
}
class grandson extends son{
    void grandsonFunction() {
        System.out.println("grandson here");
    }
}
public class MultiLevelInheritance {
    public static void main(String[] args) {
        grandson gsObj = new grandson();
        gsObj.fatherFunction();
        gsObj.sonFunction();
        gsObj.grandsonFunction();
    }
}
