<%@ Page Language="C#" AutoEventWireup="true" CodeFile="life.aspx.cs" Inherits="life" %>



<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Life</title>
    <script src="easeljs-0.8.0.min.js"></script>
    <script src="jquery-2.1.3.min.js"></script>
    <script src="underscore-min.js"></script>
    <script src="life.js"></script>
</head>
<body onload="init();">
    <form id="form1" runat="server">
    <div>
        <div>The age is <span id="age">zero</span></div>
            <div style="width: 98%; height: 98%; margin-left: 1%; margin-top: 1%; background: green" id="lifeContainer">
        <canvas style="background: red;" id="lifeCanvas"></canvas>
        </div>
    </div>
    </form>
</body>
</html>
