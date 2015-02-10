<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="life._Default" %>


<asp:Content runat="server" ID="BodyContent" ContentPlaceHolderID="MainContent">
    <div>The age is <span id="age">zero</span></div>
    <div style="width: 98%; height: 98%; margin-left: 1%; margin-top: 1%;" id="lifeContainer">
        <canvas style="background: white; width: 500px; height: 500px;" id="lifeCanvas"></canvas>
    </div>
    
</asp:Content>
