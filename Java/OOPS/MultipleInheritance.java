interface Aquatic{
    void AquaticBehaviour();
}
interface bird{
    void birdBehaviour();
}
class penguin implements Aquatic, bird{
    public void birdBehaviour() {
        System.out.println("we have wings!!");
    }
    public void AquaticBehaviour() {
        System.out.println("We live in water");
    }
    
}
public class MultipleInheritance {
    public static void main(String[] args) {
        penguin obj = new penguin();
        obj.birdBehaviour();
        obj.AquaticBehaviour();
    }
}
