<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html lang="en" dir="ltr">
      <head>
        <title></title>
      </head>
      <body>
        <h1><xsl:value-of select="pelicula/@titulo" /></h1>
        <p>
          <u>Director: </u>
          <xsl:value-of select="pelicula/direccion/director/@nombre" /> 
          <xsl:value-of select="pelicula/direccion/director/@apellidos" />
        </p>
        
        <u>Interpretes:</u>
        <xsl:for-each select="pelicula/reparto/interprete">
            <p>
            <xsl:value-of select="./@nombre" />
            <xsl:value-of select="./@apellidos" />
            </p>
        </xsl:for-each>
        
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
