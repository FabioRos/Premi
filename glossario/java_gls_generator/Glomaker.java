import java.io.BufferedWriter;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;
import java.util.Vector;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
public class Glomaker{
	
	private Vector<String> gloss=new Vector<String>();
	private Vector<String> acro=new Vector<String>();
	private Vector<String> desc=new Vector<String>();
	private Vector<String> acrodes=new Vector<String>();
	
	public Glomaker(String dirgloss) throws IOException{
		parseGloss(dirgloss);
		if(gloss.size()==desc.size() && acro.size()==acrodes.size())
			out();
	}
	
	public void parseGloss(String path) throws IOException{
		int cont=0;
		System.out.println("Directory glossario : "+path);
		FileInputStream fstream=new FileInputStream(path+"/glossario.tex");
		Scanner sc=new Scanner(fstream);
		String s="";
		//System.out.println("Parole glossario :");
		while(sc.hasNextLine()){
			s+=sc.nextLine()+"\n";
		}
		Pattern pattern = Pattern.compile("\\\\newglossaryentry\\{(.*)\\}\\{"); // parole glossario
	    Matcher matcher = pattern.matcher(s);
	    while(matcher.find()){
	    	if(!matcher.group(1).isEmpty()){
	    		//System.out.println("-"+matcher.group(1));
	    		gloss.add(matcher.group(1));
	    		System.out.println(matcher.group(1));
	    		cont++;
	    	}
	    }
	    System.out.println("\nNumero parole glossario "+cont+"\n");
	    
	    cont=0;
	    //System.out.println("Acronimi glossario :");
	    pattern = Pattern.compile("\\\\newacronym\\{(.*)\\}\\{.*\\}\\{"); //acronimi glossario
	    matcher = pattern.matcher(s);
	    while(matcher.find()){
	    	if(!matcher.group(1).isEmpty()){
	    		//System.out.println("-"+matcher.group(1));
	    		acro.add(matcher.group(1));
	    		cont++;
	    	}
	    }
	    System.out.println("\nNumero acronimi glossario "+cont+"\n");
	    
	    //System.out.println("Descrizioni:");
	    pattern = Pattern.compile("description=\\{(.*)}}"); //descrizioni parole glossario
	    matcher = pattern.matcher(s);
	    cont=0;
	    while(matcher.find()){
	    	if(!matcher.group(1).isEmpty()){
	    		//System.out.println(matcher.group(1));
	    		desc.add(matcher.group(1));
	    		System.out.println("---"+matcher.group(1));
	    		cont++;
	    	}
	    }
	    System.out.println("\nNumero descrizioni parole = "+cont+"\n");
	    
	    //System.out.println("Significato acronimi");
	    pattern = Pattern.compile("\\\\newacronym\\{.*\\}\\{.*\\}\\{(.*)\\}"); //significato acronimi glossario
	    matcher = pattern.matcher(s);
	    cont=0;
	    while(matcher.find()){
	    	if(!matcher.group(1).isEmpty()){
	    		//System.out.println(matcher.group(1));
	    		acrodes.add(matcher.group(1));
	    		cont++;
	    	}
	    }
	    System.out.println("\nNumero significati acronimi = "+cont+"\n");
	    
		sc.close();
		fstream.close();
	}
	
	public void out() throws IOException{
		PrintWriter out=new PrintWriter(new BufferedWriter(new FileWriter("./glossario/gloss.tex", false)));
		String letter=(""+gloss.elementAt(0).charAt(0)).toUpperCase();
		boolean guard=true;
		
		//Parole glossario
		out.println("\\section{Glossario}");
		for(int i=0;i<gloss.size();i++) {
			if(!(""+gloss.elementAt(i).charAt(0)).equalsIgnoreCase(letter)){
				letter=(""+gloss.elementAt(i).charAt(0)).toUpperCase();
				out.println("\\end{itemize}");
				out.println("\\end{flushleft}");
				
				guard=true;
			}
			if(guard){
				if(i!=0)
					out.println("\\newpage");
				out.println("{\\huge \\textbf{"+letter+"}}");
				out.println("\\begin{flushleft}");
				out.println("\\begin{itemize}[label={}]");
				guard=false;
			}
			out.println("\\item \\textbf{"+gloss.elementAt(i).substring(0,1).toUpperCase() + gloss.elementAt(i).substring(1,gloss.elementAt(i).length()).toLowerCase()+"}"
					+" : "+desc.elementAt(i));
		}
		out.println("\\end{itemize}");
		out.println("\\end{flushleft}");
		
		out.println("\\newpage");
		
		//Acronimi
		letter=(""+acro.elementAt(0).charAt(0)).toUpperCase();
		guard=true;
		out.println("\\section{Acronimi}");
		for(int i=0;i<acro.size();i++) {
			if(!(""+acro.elementAt(i).charAt(0)).equalsIgnoreCase(letter)){
				letter=(""+acro.elementAt(i).charAt(0)).toUpperCase();
				out.println("\\end{itemize}");
				out.println("\\end{flushleft}");
				
				guard=true;
			}
			if(guard){
				out.println("{\\huge \\textbf{"+letter+"}}");
				out.println("\\begin{flushleft}");
				out.println("\\begin{itemize}[label={}]");
				guard=false;
			}
			out.println("\\item \\textbf{"+acro.elementAt(i).substring(0,1).toUpperCase() + acro.elementAt(i).substring(1,acro.elementAt(i).length()).toLowerCase()+"}"
					+" : "+acrodes.elementAt(i));
		}
		out.println("\\end{itemize}");
		out.println("\\end{flushleft}");
		
		
		
	    out.close();
	}
	
	public static void main(String args[]){
		try{
			//new Glomaker(args[0]);
			new Glomaker("./glossario");
			System.out.println("FINE-------------------");
		}catch(IOException e){
			e.printStackTrace();
		}
	}
}

