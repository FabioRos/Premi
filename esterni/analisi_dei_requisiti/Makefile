LATEX					= latex -interaction=batchmode
PDFLATEX				= pdflatex -interaction=batchmode

NOMEDOCUMENTO		= ${shell basename ${CURDIR}}

NOMEDOCUMENTO_PDF	= $(NOMEDOCUMENTO).pdf
NOMEDOCUMENTO_TEX	= $(NOMEDOCUMENTO).tex

FILECLEAN		= *.aux *.glo *.gz *.ist *.lof *.log *.lot *.out *.toc


$(NOMEDOCUMENTO_PDF): $(NOMEDOCUMENTO_TEX)
	$(PDFLATEX) $(NOMEDOCUMENTO)
	$(PDFLATEX) $(NOMEDOCUMENTO)
	$(shell make distclean)

.PHONY: distclean clean
distclean: clean
	rm -f *.dvi

clean:
	rm -f $(FILECLEAN)
