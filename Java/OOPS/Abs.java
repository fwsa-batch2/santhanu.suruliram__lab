abstract class gpu{
    abstract void render();
}
class rtx3090 extends gpu {
    public void render(){
        System.out.println("RTX gives a monster gaming experience");
    }
}
public class Abs {
    public static void main(String[] args) {
        rtx3090 obj = new rtx3090();
        obj.render();
    }
}
