jQuery(document).ready(function(){
  // Adds "edit me" note to editable code areas
  jQuery(".snippet").before("<span class=\"edit\">edit me</span>");

  // Add class to resource section
  jQuery( "h3:contains('Resources'), "+
          "h3:contains('Resource'), "+
          "h3:contains('Further Reading'), "+
          "h3:contains('Examples'), "+
          "h3:contains('Note'), "+
          "h3:contains('More Info'), "+
          "h3:contains('Pro tip!')"
          ).addClass("resources");

  // Generate the Table of Contents
  var ToC = "<ul>";
  var newLine, el, title, link;

  jQuery("[data-toc] > h1").each(function() {
    el = jQuery(this);
    title = el.text();
    link = "#" + el.parent().attr("id");

    newLine =
      "<li>" +
        "<a href='" + link + "'>" +
          title +
        "</a>" +
      "</li>";

    ToC += newLine;
  });
  ToC +="</ul>";
  jQuery(".table-of-contents").append(ToC);

});
