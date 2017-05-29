/**
 * 代码美化显示
 */
$(function(){
	SyntaxHighlighter.autoloader(
			['js','jscript','javascript','lib/syntaxhighlighter/scripts/shBrushJScript.js'],
			['bash','shell','lib/syntaxhighlighter/scripts/shBrushBash.js'],
			['css','lib/syntaxhighlighter/scripts/shBrushCss.js'],
            ['xml','html','lib/syntaxhighlighter/scripts/shBrushXml.js'],
            ['sql','lib/syntaxhighlighter/scripts/shBrushSql.js']
	);
	SyntaxHighlighter.all();
});
