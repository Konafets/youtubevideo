page.includeCSS.youtubevideo = {$youtubevideo.cssPath}
page.includeJSFooterlibs.youtubevideo = {$youtubevideo.javascriptPath}

tt_content {
	youtubevideo_pi1 =< lib.fluidContent
	youtubevideo_pi1 {
	  templateName = Youtubevideo
	  templateRootPaths.200 = {$youtubevideo.templateRootPaths}
	  partialRootPaths.200 = {$youtubevideo.partialRootPaths}
	  dataProcessing.5 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
		dataProcessing.5.references.fieldName = image
	  dataProcessing.10 = Brightside\Youtubevideo\DataProcessing\DatabaseCustomQueryProcessor
	}
}
plugin.tx_youtubevideo {
  render {
		# language code use de, fr, et etc.
		hl = TEXT
		hl.value = {$youtubevideo.hl}

    # wide screen 16:9 value (math behind: 9 * 100 / 16 = 56.25)
    ratioDefault = TEXT
    ratioDefault.value = 56.25

    # old screens 4:3 value (math behind: 3 * 100 / 4 = 75)
    ratio1 = TEXT
    ratio1.value = 75

    # If you need more aspect ratios add em here and change Page TSConfig and HTML template accordingly.

    modestbranding = TEXT
    modestbranding.value = {$youtubevideo.modestbranding}
    # If set to '1' disables the YouTube logo on video player toolbar.

    # custom cover image width (if set 640 or smaller and no custom image set sddefault image from youtube will be used instead of maxresdefault)
    coverimagewidth = TEXT
    coverimagewidth.value = {$youtubevideo.coverimagewidth}

		# if set to 0 and cover text is not present fetching cover image from youtube will be turned off
    enablecovertoall = TEXT
    enablecovertoall.value = {$youtubevideo.enablecovertoall}
  }
}
