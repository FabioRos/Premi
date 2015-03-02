#latexmk and detex are part of texlive

LATEXMK=latexmk $(LATEXFLAGS)
DOCUMENT=`basename "$(PWD)"`
INPUT=$(DOCUMENT).tex

.PHONY : clenbuild clean build jenkins gulpease aspell

cleanbuild: build
	$(LATEXMK) -c $(DOCUMENT)

check:
	@ rubber-info --errors $(DOCUMENT) 2>/dev/null | sed -r "s/(.+)/Error:\1/g"
	@ rubber-info --warnings $(DOCUMENT) 2>/dev/null | sed -r "s/(.+)/Warning:\1/g"
	@ rubber-info --boxes $(DOCUMENT) 2>/dev/null | sed -r "s/(.+)/Info:\1/g"

build: clean
	@ echo $(DOCUMENT)
	@ $(LATEXMK) -pdf $(INPUT)

jenkins:
	@ make clean >/dev/null 2>&1 || rm -f $(DOCUMENT).pdf
	@ make build >/dev/null 2>&1 || echo "Errore: LaTeX Fallito"
	@ make check

clean:
	@ $(LATEXMK) -C $(INPUT)

gulpease:
	@ detex $(INPUT) | sed -n '/AOjvdYTJD7mcIIYItfsNiYPbmTTogRSP9hrrb2XPE1laMyQ9NHrPgTCTxnW0eV1YcM3Wqh7t5qThjczeXWq3O5FJ7BBQjoWZovC5/,$$p' | tail -n +2 | gawk '{n = split($$0,a,/[\.;]/); for (i=1; i<=n; i++){gsub(/^\s+/, "", a[i]);gsub(/\s+$$/, "", a[i]);if (match(a[i], /\s/)){phrases++;words += split(a[i],b,/\s/);gsub(/[^A-Za-z0-9]/, "", a[i]);characters += length(a[i]);}}}END   { print "Phrases: " phrases;print "Words: " words;print "Characters: " characters;print "Gulpease: " 89+(300*phrases-10*characters)/words;}'

aspell:
	@ aspell --lang it --mode tex check $(INPUT)
	@ for file in sections/*.tex; do aspell --lang it --mode tex check $$file; done