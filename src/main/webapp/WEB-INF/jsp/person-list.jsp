<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"
%><!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spring Web Demo | Cloud Foundry | Swisscom</title>
    <link rel="shortcut icon" href=assets/imgs/favicon.ico"/>
    <link rel="stylesheet" href="assets/css/app.css" />
    <script src="assets/libs/modernizr.js"></script>
</head>
<!--body data-interchange="[assets/imgs/background-small.png, (small)], [assets/imgs/background.png, (medium)], [assets/imgs/background-large.png, (large)]"-->
<body>
    <div class="row">
        <div class="large-12 columns"><p>&nbsp;</p></div>
    </div>
    <div class="row">
        <div class="large-12 columns">
            <div class="panel text-center" data-interchange="[assets/img/chalkboard.png, (default)]">
                <h1>Welcome to the Swisscom AppCloud SBB!</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="large-12 columns"><p>&nbsp;</p></div>
    </div>
    <div class="row">
        <div class="large-12 columns">
            <div class="panel text-center">
                <form action="person/save" method="post">
                    <div>
                        <input type="hidden" name="id"/>
                        <label for="firstname">Person Firstname</label>
                        <input type="text" id="firstname" name="firstname"/></br>
                        <label for="lastname">Person Lastname</label>
                        <input type="text" id="lastname" name="lastname"/></br>
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="large-12 columns"><p>&nbsp;</p></div>
    </div>
    <div class="row">
        <div class="large-12 columns">
            <div class="panel text-center">
                <table border="1">
                    <c:forEach var="person" items="${personList}"><tr>
                        <td>${person.firstname}</td>
                        <td>${person.lastname}</td>
                        <td><input type="button" value="delete" onclick="window.location='person/delete?id=${person.id}'"/></td>
                    </tr></c:forEach>
                </table>
            </div>
        </div>
    </div>

    <footer class="row">
        <div class="large-12 columns text-right">
            <p>&copy; Copyright Swisscom AG 2014</p>
        </div>
    </footer>
    <script src="assets/libs/jquery.min.js"></script>
    <script src="assets/libs/foundation.min.js"></script>
    <script src="assets/js/app.min.js"></script>
</body>
</html>
