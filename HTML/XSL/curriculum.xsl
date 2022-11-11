<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html lang="en" dir="ltr">
      <head>
        <title></title>
        <link rel="stylesheet" href="curriculum.css" />
      </head>
      <body>
      
        <table class="principal">
            <tr>
            
              <td>
                <table class="izquierda">
                
                  <tr>
                  <td class="foto">
                      <xsl:element name="img" >
                          <xsl:attribute name="src">
                            <xsl:value-of select="curriculum/foto" />
                          </xsl:attribute>
                          <xsl:attribute name="height">
                            150px
                          </xsl:attribute>
                      </xsl:element>
                    </td>
                  </tr>
                  
                  <tr>
                  <td class="contacto"><h2><u>Contacto</u></h2></td>
                  </tr>
                  
                  <tr>
                    <td class="datosContacto">
                      <p><xsl:value-of select="curriculum/datosContacto/telefono"/></p>
                      <p><xsl:value-of select="curriculum/datosContacto/email" /></p>
                      <p><xsl:value-of select="curriculum/datosContacto/direccion" /></p>
                      <p><xsl:value-of select="curriculum/datosContacto/linkedin" /></p>
                    </td>
                  </tr>
                  
                  <tr>
                    <td class="extrasTitulo"><h2><u>Extras</u></h2></td>
                  </tr>
                  
                  <tr>
                    <td class="ofimatica"><h3>Ofimática:</h3></td>
                  </tr>
                   
                  <tr>
                     <td class="extras">
                       <xsl:for-each select="curriculum/extras/ofimatica/datos">
                         <p><xsl:value-of select="." /></p>
                       </xsl:for-each>
                    </td>
                  </tr>
                  
                  <tr>
                    <td class="idiomas"><h3>Idiomas:</h3></td>
                  </tr>
                  
                  <tr>
                    <td class="extras">
                      <xsl:for-each select="curriculum/extras/idiomas/idioma">
                        <p><xsl:value-of select="." />
                          <span class="nivel">
                             Nivel: <xsl:value-of select="./@nivel" />
                          </span>
                        </p>
                      </xsl:for-each>
                    </td>
                  </tr>
                  
                </table>
              </td>
              
              <td>
                <table class="derecha">
                
                  <tr>
                    <td class="nombre"><b><xsl:value-of select="curriculum/nombre" /></b></td>
                  </tr>
                  
                  <tr>
                    <td class="objetivo"><h2>Objetivo Profesional</h2></td>
                  </tr>
                  
                  <tr>
                    <td class="descripcion"><xsl:value-of select="curriculum/descripcion" /></td>
                  </tr>
                  
                  <tr>
                  <td class="fAcad"><h2>Formación académica</h2></td>
                  </tr>
                  
                  <tr>
                    <td class="formacAcad"><xsl:for-each select="curriculum/formacionAcad" >
                      <p><xsl:value-of select="modulo" /><span class="formA"><xsl:value-of select="fecha" /></span><span class="formA"><xsl:value-of select="institucion" /></span><span class="formA"><xsl:value-of select="lugar" /></span></p>
                      </xsl:for-each>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
            </table>
        
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
