package Web_pages;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class LoginPage {
    @RequestMapping(value = "/users/test")
    @ResponseBody
    public String testing() {
        return "Test";
    }



}
