<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html lang="en" dir="ltr">
      <head>
        <title></title>
        <style>
          .verde{
            background-color :green;
            }
          .rojo{
            background-color: red;
            } 
        </style>
      </head>
      <body>
        <h1>Mis gastos - <xsl:value-of select="gastos/mes" /></h1>
        <table border="1">
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <xsl:for-each select="//gasto">
            <xsl:choose>
              <xsl:when test="./@desgravable = 'si'">
              <tr>
                <td class="verde"><xsl:value-of select="concepto" /></td>
                <td class="verde"><xsl:value-of select="importe" /></td>
                <td class="verde">Si es desgravable</td>
              </tr>
              </xsl:when>
              <xsl:otherwise>
                <tr>
                  <td class="rojo"><xsl:value-of select="concepto" /></td>
                  <td class="rojo"><xsl:value-of select="importe" /></td>
                  <td class="rojo">No es desgravable</td>
                </tr>
              </xsl:otherwise>
            </xsl:choose>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
