<%@ WebHandler Language="C#" Class="newletterfrm" %>

using System.Text;
using System.Web;
using System.Net.Mail;

public class newletterfrm : IHttpHandler {
    string Email = null;
    public void ProcessRequest (HttpContext context)
    {
        try
        {
            Email = context.Request["email"];

            string Sender = Email;
            string AdminMail = "sougandiraj@gmail.com";
            string SubjectAdmin = "Enquiry From Atsi";
            string SubjectReply = "Thank You " + Email + " For Contacting Atsi";

            StringBuilder MessageAdmin = MessageForAdmin(Email);
            StringBuilder MessageReply = MessageForUser(Email);
            sendMail(Sender, AdminMail, SubjectAdmin, MessageAdmin.ToString());
            sendMail(Sender, Email, SubjectReply, MessageReply.ToString());


            context.Response.ContentType = "text/plain";
            context.Response.Write("Message Sent");
            context.Response.Redirect("https://www.atsi.in/atsi/");
        }
        catch { context.Response.Redirect("https://www.atsi.in/atsi/"); }
    }
    public void sendMail(string sender, string recipient, string subject, string message)
    {
        MailMessage mail = new MailMessage();
        mail.Bcc.Add(recipient.Trim());
        mail.CC.Add("sougandiraj@gmail.com");
        mail.From = new MailAddress(sender.Trim());
        mail.Subject = subject;
        mail.Body = message;
        mail.IsBodyHtml = true;
        SmtpClient smtp = new SmtpClient();
        smtp.Host = "smtp.gmail.com";
        smtp.Port = 587;
        smtp.UseDefaultCredentials = true;
        smtp.Credentials = new System.Net.NetworkCredential("sougandiraj@gmail.com", "rak#14@10raj");
        smtp.EnableSsl = true;
        smtp.Send(mail);
    }

    public StringBuilder MessageForAdmin(string Email)
    {
        StringBuilder sb = new StringBuilder();
        sb.Append("<table class='body-wrap' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background: #f6f6f6; margin: 0; padding: 0;'>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;' valign='top'></td>");
        sb.Append("<td class='container' width='600' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto; padding: 0;' valign='top'>");
        sb.Append("<div class='content' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;'>");
        sb.Append("<table class='main' width='100%' cellpadding='0' cellspacing='0' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background: #fff; margin: 0; padding: 0; border: 1px solid #e9e9e9;'>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='alert alert-warning' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background: #999EDA; margin: 0; padding: 20px;' align='center' valign='top'>");
        sb.Append(" NewLetter Message From  ATSI Website");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-wrap' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;' valign='top'>");
        sb.Append("<table width='100%' cellpadding='0' cellspacing='0' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("Hello Team,<br /> A message has been recieved from website");
        sb.Append("</td>");
        sb.Append("</tr>");

        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("<strong style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>Email : </strong> " + Email + "<br />");
        sb.Append("</td>");
        sb.Append("</tr>");

        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("<a target='_blank' href='https://www.atsi.in/atsi/' class='btn-primary' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background: #348eda; margin: 0; padding: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;'>Go to Website</a>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("Thank you,<br />");
        sb.Append("<strong style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>XIPHIAS Software Technologies Pvt. Ltd</strong>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("</table>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("</table>");
        sb.Append("</div>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("</table>");
        return sb;
    }
    public StringBuilder MessageForUser(string Name)
    {
        StringBuilder sb = new StringBuilder();
        sb.Append("<table class='body-wrap' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background: #f6f6f6; margin: 0; padding: 0;'>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0;' valign='top'></td>");
        sb.Append("<td class='container' width='600' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto; padding: 0;' valign='top'>");
        sb.Append("<div class='content' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;'>");
        sb.Append("<table class='main' width='100%' cellpadding='0' cellspacing='0' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background: #fff; margin: 0; padding: 0; border: 1px solid #e9e9e9;'>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='alert alert-warning' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background: #999EDA; margin: 0; padding: 20px;' align='center' valign='top'>");
        sb.Append("Message recieved by ATSI.");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-wrap' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;' valign='top'>");
        sb.Append("<table width='100%' cellpadding='0' cellspacing='0' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("Hello " + Name + ",<br /> Thank You For Showing Interest on ATSI. We Will Contact You Shortly.");
        sb.Append("</td>");
        sb.Append("</tr>");

        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("<a target='_blank' href='https://www.atsi.in/atsi/' class='btn-primary' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background: #348eda; margin: 0; padding: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;'>Visit our Website</a>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("<tr style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>");
        sb.Append("<td class='content-block' style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;' valign='top'>");
        sb.Append("Thank you,<br />");
        sb.Append("<strong style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>XIPHIAS Software Technologies Pvt. Ltd,<br/></strong>");
        sb.Append("<strong style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>8th Floor, B.M.T.C / T.T.M.C Building,<br/></strong>");
        sb.Append("<strong style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>6th Block, Koramangala, Bangalore-560095.<br/></strong>");
        sb.Append("<strong style='font-family: Helvetica Neue, Helvetica, Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0; padding: 0;'>Phone:+91-80-67601000,+91-80-25625999<br/></strong>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("</table>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("</table>");
        sb.Append("</div>");
        sb.Append("</td>");
        sb.Append("</tr>");
        sb.Append("</table>");
        return sb;
    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}