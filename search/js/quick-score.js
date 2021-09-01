var QS;

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.quickScore = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * A class representing a half-open interval of characters.  A range's `location`
   * property and `max()` value can be used as arguments for the `substring()`
   * method to extract a range of characters.
   */
  var Range = /*#__PURE__*/function () {
    /**
     * @param {number} [location=-1] - Starting index of the range.
     * @param {number} [length=0] - Number of characters in the range.
     */
    function Range(location, length) {
      _classCallCheck(this, Range);

      if (typeof location == "number") {
        this.location = location;
        this.length = length;
      } else {
        this.location = -1;
        this.length = 0;
      }
    }
    /* eslint no-inline-comments: 0 */

    /**
     * Gets the end index of the range, which indicates the character
     * immediately after the last one in the range.
     *
     * @returns {number}
     */

    /**
    * Sets the end index of the range, which indicates the character
    * immediately after the last one in the range.
    *
    * @param {number} [value] - End of the range.
    *
    * @returns {number}
    */


    _createClass(Range, [{
      key: "max",
      value: function max(value) {
        if (typeof value == "number") {
          this.length = value - this.location;
        } // the NSMaxRange() function in Objective-C returns this value


        return this.location + this.length;
      }
      /**
       * Returns whether the range contains a location >= 0.
       *
       * @returns {boolean}
       */

    }, {
      key: "isValid",
      value: function isValid() {
        return this.location > -1;
      }
      /**
       * Returns an array of the range's start and end indexes.
       *
       * @returns {Array<number>}
       */

    }, {
      key: "toArray",
      value: function toArray() {
        return [this.location, this.max()];
      }
      /**
       * Returns a string representation of the range's open interval.
       *
       * @returns {string}
       */

    }, {
      key: "toString",
      value: function toString() {
        if (this.location == -1) {
          return "invalid range";
        } else {
          return "[" + this.location + "," + this.max() + ")";
        }
      }
    }]);

    return Range;
  }();

  var BaseConfigDefaults = {
    wordSeparators: "-/\\:()<>%._=&[]+ \t\n\r",
    uppercaseLetters: function () {
      var charCodeA = "A".charCodeAt(0);
      var uppercase = [];

      for (var i = 0; i < 26; i++) {
        uppercase.push(String.fromCharCode(charCodeA + i));
      }

      return uppercase.join("");
    }(),
    ignoredScore: 0.9,
    skippedScore: 0.15,
    emptyQueryScore: 0
  };
  var QSConfigDefaults = {
    longStringLength: 150,
    maxMatchStartPct: 0.15,
    minMatchDensityPct: 0.75,
    maxMatchDensityPct: 0.95,
    beginningOfStringPct: 0.1
  };

  var Config = /*#__PURE__*/function () {
    function Config(options) {
      _classCallCheck(this, Config);

      Object.assign(this, BaseConfigDefaults, options);
    }

    _createClass(Config, [{
      key: "useSkipReduction",
      value: function useSkipReduction() {
        return true;
      }
    }, {
      key: "adjustRemainingScore",
      value: function adjustRemainingScore(string, query, remainingScore, skippedSpecialChar, searchRange, remainingSearchRange, matchedRange, fullMatchedRange) {
        // use the original Quicksilver expression for the remainingScore
        return remainingScore * remainingSearchRange.length;
      }
    }]);

    return Config;
  }();

  var QuickScoreConfig = /*#__PURE__*/function (_Config) {
    _inherits(QuickScoreConfig, _Config);

    var _super = _createSuper(QuickScoreConfig);

    function QuickScoreConfig(options) {
      _classCallCheck(this, QuickScoreConfig);

      return _super.call(this, Object.assign({}, QSConfigDefaults, options));
    }

    _createClass(QuickScoreConfig, [{
      key: "useSkipReduction",
      value: function useSkipReduction(string, query, remainingScore, searchRange, remainingSearchRange, matchedRange, fullMatchedRange) {
        var len = string.length;
        var isShortString = len <= this.longStringLength;
        var matchStartPercentage = fullMatchedRange.location / len;
        return isShortString || matchStartPercentage < this.maxMatchStartPct;
      }
    }, {
      key: "adjustRemainingScore",
      value: function adjustRemainingScore(string, query, remainingScore, skippedSpecialChar, searchRange, remainingSearchRange, matchedRange, fullMatchedRange) {
        var isShortString = string.length <= this.longStringLength;
        var matchStartPercentage = fullMatchedRange.location / string.length;
        var matchRangeDiscount = 1;
        var matchStartDiscount = 1 - matchStartPercentage; // discount the remainingScore based on how much larger the match is
        // than the query, unless the match is in the first 10% of the
        // string, the match range isn't too sparse and the whole string is
        // not too long.  also only discount if we didn't skip any whitespace
        // or capitals.

        if (!skippedSpecialChar) {
          matchRangeDiscount = query.length / fullMatchedRange.length;
          matchRangeDiscount = isShortString && matchStartPercentage <= this.beginningOfStringPct && matchRangeDiscount >= this.minMatchDensityPct ? 1 : matchRangeDiscount;
          matchStartDiscount = matchRangeDiscount >= this.maxMatchDensityPct ? 1 : matchStartDiscount;
        } // discount the scores of very long strings


        return remainingScore * Math.min(remainingSearchRange.length, this.longStringLength) * matchRangeDiscount * matchStartDiscount;
      }
    }]);

    return QuickScoreConfig;
  }(Config);

  function createConfig(options) {
    if (options instanceof Config) {
      // this is a full-fledged Config instance, so we don't need to do
      // anything to it
      return options;
    } else {
      // create a complete config from this
      return new QuickScoreConfig(options);
    }
  }
  var DefaultConfig = createConfig();
  var BaseConfig = new Config();
  var QuicksilverConfig = new Config({
    // the Quicksilver algorithm returns .9 for empty queries
    emptyQueryScore: 0.9,
    adjustRemainingScore: function adjustRemainingScore(string, query, remainingScore, skippedSpecialChar, searchRange, remainingSearchRange, matchedRange, fullMatchedRange) {
      var score = remainingScore * remainingSearchRange.length;

      if (!skippedSpecialChar) {
        // the current QuickSilver algorithm reduces the score by half
        // this value when no special chars are skipped, so add the half
        // back in to match it
        score += (matchedRange.location - searchRange.location) / 2.0;
      }

      return score;
    }
  });

  /**
   * Scores a string against a query.
   *
   * @param {string} string - The string to score.
   *
   * @param {string} query - The query string to score the `string` parameter against.
   *
   * @param {Array} [matches] - If supplied, the `quickScore()` will push
   * onto `matches` an array with start and end indexes for each substring range
   * of `string` that matches `query`.  These indexes can be used to highlight the
   * matching characters in an auto-complete UI.
   *
   * @param {string} [transformedString] - A transformed version of the string that
   * will be used for matching.  This defaults to a lowercase version of `string`,
   * but it could also be used to match against a string with all the diacritics
   * removed, so an unaccented character in the query would match an accented one
   * in the string.
   *
   * @param {string} [transformedQuery] - A transformed version of `query`.  The
   * same transformation applied to `transformedString` should be applied to this
   * parameter, or both can be left as `undefined` for the default lowercase
   * transformation.
   *
   * @param {object} [config] - A configuration object that can modify how the
   * `quickScore` algorithm behaves.
   *
   * @param {Range} [stringRange] - The range of characters in `string` that should
   * be checked for matches against `query`.  Defaults to all of the `string`
   * parameter.
   *
   * @returns {number}
   */

  function quickScore() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var matches = arguments.length > 2 ? arguments[2] : undefined;
    var transformedString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : string.toLocaleLowerCase();
    var transformedQuery = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : query.toLocaleLowerCase();
    var config = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : DefaultConfig;
    var stringRange = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new Range(0, string.length);

    if (!query) {
      return config.emptyQueryScore;
    }

    return calcScore(stringRange, new Range(0, query.length), new Range());

    function calcScore(searchRange, queryRange, fullMatchedRange) {
      if (!queryRange.length) {
        // deduct some points for all remaining characters
        return config.ignoredScore;
      }

      if (queryRange.length > searchRange.length) {
        return 0;
      }

      var initialMatchesLength = matches && matches.length;

      for (var i = queryRange.length; i > 0; i--) {
        var querySubstring = transformedQuery.substring(queryRange.location, queryRange.location + i); // reduce the length of the search range by the number of chars
        // we're skipping in the query, to make sure there's enough string
        // left to possibly contain the skipped chars

        var matchedRange = getRangeOfSubstring(transformedString, querySubstring, new Range(searchRange.location, searchRange.length - queryRange.length + i));

        if (!matchedRange.isValid()) {
          // we didn't find the query substring, so try again with a
          // shorter substring
          continue;
        }

        if (!fullMatchedRange.isValid()) {
          fullMatchedRange.location = matchedRange.location;
        } else {
          fullMatchedRange.location = Math.min(fullMatchedRange.location, matchedRange.location);
        }

        fullMatchedRange.max(matchedRange.max());

        if (matches) {
          matches.push([matchedRange.location, matchedRange.max()]);
        }

        var remainingSearchRange = new Range(matchedRange.max(), searchRange.max() - matchedRange.max());
        var remainingQueryRange = new Range(queryRange.location + i, queryRange.length - i);
        var remainingScore = calcScore(remainingSearchRange, remainingQueryRange, fullMatchedRange);

        if (remainingScore) {
          var score = remainingSearchRange.location - searchRange.location; // default to true since we only want to apply a discount if
          // we hit the final else clause below, and we won't get to
          // any of them if the match is right at the start of the
          // searchRange

          var skippedSpecialChar = true;
          var useSkipReduction = config.useSkipReduction(string, query, remainingScore, remainingSearchRange, searchRange, remainingSearchRange, matchedRange, fullMatchedRange);

          if (matchedRange.location > searchRange.location) {
            // some letters were skipped when finding this match, so
            // adjust the score based on whether spaces or capital
            // letters were skipped
            if (useSkipReduction && config.wordSeparators.indexOf(string[matchedRange.location - 1]) > -1) {
              for (var j = matchedRange.location - 2; j >= searchRange.location; j--) {
                if (config.wordSeparators.indexOf(string[j]) > -1) {
                  score--;
                } else {
                  score -= config.skippedScore;
                }
              }
            } else if (useSkipReduction && config.uppercaseLetters.indexOf(string[matchedRange.location]) > -1) {
              for (var _j = matchedRange.location - 1; _j >= searchRange.location; _j--) {
                if (config.uppercaseLetters.indexOf(string[_j]) > -1) {
                  score--;
                } else {
                  score -= config.skippedScore;
                }
              }
            } else {
              // reduce the score by the number of chars we've
              // skipped since the beginning of the search range
              score -= matchedRange.location - searchRange.location;
              skippedSpecialChar = false;
            }
          }

          score += config.adjustRemainingScore(string, query, remainingScore, skippedSpecialChar, searchRange, remainingSearchRange, matchedRange, fullMatchedRange);
          score /= searchRange.length;
          return score;
        } else if (matches) {
          // the remaining query does not appear in the remaining
          // string, so strip off any matches we've added during the
          // current call, as they'll be invalid when we start over
          // with a shorter piece of the query
          matches.length = initialMatchesLength;
        }
      }

      return 0;
    }
  } // make createConfig() available on quickScore so that the QuickScore
  // constructor has access to it

  quickScore.createConfig = createConfig;

  function getRangeOfSubstring(string, substring, searchRange) {
    var stringToSearch = string.substring(searchRange.location, searchRange.max());
    var subStringIndex = stringToSearch.indexOf(substring);
    var result = new Range();

    if (subStringIndex > -1) {
      result.location = subStringIndex + searchRange.location;
      result.length = substring.length;
    }

    return result;
  }

  /**
   * A class for scoring and sorting a list of items against a query string.  Each
   * item receives a floating point score between `0` and `1`.
   */

  var QuickScore = /*#__PURE__*/function () {
    /**
     * @param {Array<string|object>} [items] - The list of items to score.  If
     * the list is not a flat array of strings, a `keys` array must be supplied
     * via the second parameter.  The `items` array is not modified by QuickScore.
     *
     * @param {Array<string|object>|object} [options] - If the `items` parameter
     * is an array of flat strings, the `options` parameter can be left out.  If
     * it is a list of objects containing keys that should be scored, the
     * `options` parameter must either be an array of key names or an object
     * containing a `keys` property.
     *
     * @param {Array<string|string[]|{name: string, scorer: function}>} [options.keys] -
     * In the simplest case, an array of key names to score on the objects in
     * the `items` array.
     *
     * The key names can point to a nested key by passing either a dot-delimited
     * string or an array of sub-keys that specify the path to the value.  So a
     * key `name` of `"foo.bar"` would evaluate to `"baz"` given an object like
     * `{ foo: { bar: "baz" } }`.  Alternatively, that path could be passed as
     * an array, like `["foo", "bar"]`.  In either case, if this sub-key's match
     * produces the highest score for an item in the search results, its
     * `scoreKey` name will be `"foo.bar"`.
     *
     * If your items have keys that contain periods, e.g., `"first.name"`, but
     * you don't want these names to be treated as paths to nested keys, simply
     * wrap the name in an array, like `{ keys: ["ssn", ["first.name"],
     * ["last.name"]] }`.
     *
     * Instead of a string or string array, an item in `keys` can also be passed
     * as a `{name, scorer}` object, which lets you specify a different scoring
     * function for each key.  The scoring function should behave as described
     * next.
     *
     * @param {function(string, string, array?): number} [options.scorer] -
     * An optional function that takes `string` and `query` parameters and
     * returns a floating point number between 0 and 1 that represents how
     * well the `query` matches the `string`.  It defaults to the
     * [quickScore()]{@link quickScore} function in this library.
     *
     * If the function gets a third `matches` parameter, it should fill the
     * passed-in array with indexes corresponding to where the query
     * matches the string, as described in the [search()]{@link QuickScore#search}
     * method.
     *
     * @param {string} [options.sortKey=options.keys[0]] - An optional key name
     * that will be used to sort items with identical scores.  Defaults to the
     * name of the first item in the `keys` parameter.  If `sortKey` points to
     * a nested key, use a dot-delimited string instead of an array to specify
     * the path.
     *
     * @param {number} [options.minimumScore=0] - An optional value that
     * specifies the minimum score an item must have to appear in the results
     * array returned from [search()]{@link QuickScore#search}.  Defaults to `0`,
     * so items that don't match the full `query` will not be returned.  This
     * value is ignored if the `query` is empty or undefined, in which case all
     * items are returned, sorted alphabetically and case-insensitively on the
     * `sortKey`, if any.
     *
     * @param {function(string): string} [options.transformString] -
     * An optional function that takes a `string` parameter and returns a
     * transformed version of that string.  This function will be called on each
     * of the searchable keys in the `items` array as well as on the `query`
     * parameter to the `search()` method.  The default function calls
     * `toLocaleLowerCase()` on each string, for a case-insensitive search.  The
     * result of this function is cached for each searchable key on each item.
     *
     * You can pass a function here to do other kinds of preprocessing, such as
     * removing diacritics from all the strings or converting Chinese characters
     * to pinyin.  For example, you could use the
     * [`latinize`](https://www.npmjs.com/package/latinize) npm package to
     * convert characters with diacritics to the base character so that your
     * users can type an unaccented character in the query while still matching
     * items that have accents or diacritics.  Pass in an `options` object like
     * this to use a custom `transformString()` function:
     * `{ transformString: s => latinize(s.toLocaleLowerCase()) }`
     *
     * @param {object} [options.config] - An optional object that can be passed
     * to the scorer function to further customize it's behavior.  If the
     * `scorer` function has a `createConfig()` method on it, the `QuickScore`
     * instance will call that with the `config` value and store the result.
     * This can be used to extend the `config` parameter with default values.
     */
    function QuickScore() {
      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, QuickScore);

      var _ref = Array.isArray(options) ? {
        keys: options
      } : options,
          _ref$scorer = _ref.scorer,
          scorer = _ref$scorer === void 0 ? quickScore : _ref$scorer,
          _ref$transformString = _ref.transformString,
          transformString = _ref$transformString === void 0 ? toLocaleLowerCase : _ref$transformString,
          _ref$keys = _ref.keys,
          keys = _ref$keys === void 0 ? [] : _ref$keys,
          _ref$sortKey = _ref.sortKey,
          sortKey = _ref$sortKey === void 0 ? "" : _ref$sortKey,
          _ref$minimumScore = _ref.minimumScore,
          minimumScore = _ref$minimumScore === void 0 ? 0 : _ref$minimumScore,
          config = _ref.config;

      this.scorer = scorer;
      this.minimumScore = minimumScore;
      this.config = config;
      this.transformStringFunc = transformString;

      if (typeof scorer.createConfig === "function") {
        // let the scorer fill out the config with default values
        this.config = scorer.createConfig(config);
      }

      this.setKeys(keys, sortKey);
      this.setItems(items); // the scoring function needs access to this.sortKey

      this.compareScoredStrings = this.compareScoredStrings.bind(this);
    }
    /**
     * Scores the instance's items against the `query` and sorts them from
     * highest to lowest.
     *
     * @param {string} query - The string to score each item against.  The
     * instance's `transformString()` function is called on this string before
     * it's matched against each item.
     *
     * @returns {Array<object>} When the instance's `items` are flat strings,
     * the result objects contain the following properties:
     *
     * - `item`: the string that was scored
     * - `score`: the floating point score of the string for the current query
     * - `matches`: an array of arrays that specifies the character ranges
     *   where the query matched the string
     *
     * When the `items` are objects, the result objects contain:
     *
     * - `item`: the object that was scored
     * - `score`: the highest score from among the individual key scores
     * - `scoreKey`: the name of the key with the highest score, which will be
     *   an empty string if they're all zero
     * - `scoreValue`: the value of the key with the highest score
     * - `scores`: a hash of the individual scores for each key
     * - `matches`: a hash of arrays that specify the character ranges of the
     *   query match for each key
     *
     * The results array is sorted high to low on each item's score.  Items with
     * identical scores are sorted alphabetically and case-insensitively on the
     * `sortKey` option.  Items with scores that are <= the `minimumScore` option
     * (defaults to `0`) are not returned, unless the `query` is falsy, in which
     * case all of the items are returned, sorted alphabetically.
     *
     * The arrays of start and end indices in the `matches` array can be used as
     * parameters to the `substring()` method to extract the characters from
     * each string that match the query.  This can then be used to format the
     * matching characters with a different color or style.
     *
     * Each result item also has a `_` property, which caches transformed
     * versions of the item's strings, and might contain additional internal
     * metadata in the future.  It can be ignored.
     */


    _createClass(QuickScore, [{
      key: "search",
      value: function search(query) {
        var results = [];
        var items = this.items,
            transformedItems = this.transformedItems,
            sharedKeys = this.keys,
            config = this.config; // if the query is empty, we want to return all items, so make the
        // minimum score less than 0

        var minScore = query ? this.minimumScore : -1;
        var transformedQuery = this.transformString(query);
        var itemCount = items.length;
        var sharedKeyCount = sharedKeys.length;

        if (typeof items[0] === "string") {
          // items is an array of strings
          for (var i = 0; i < itemCount; i++) {
            var item = items[i];
            var transformedItem = transformedItems[i];
            var matches = [];
            var score = this.scorer(item, query, matches, transformedItem, transformedQuery, config);

            if (score > minScore) {
              results.push({
                item: item,
                score: score,
                matches: matches,
                _: transformedItem
              });
            }
          }
        } else {
          for (var _i = 0; _i < itemCount; _i++) {
            var _item = items[_i];
            var _transformedItem = transformedItems[_i];
            var result = {
              item: _item,
              score: 0,
              scoreKey: "",
              scoreValue: "",
              scores: {},
              matches: {},
              _: _transformedItem
            }; // if an empty keys array was passed into the constructor,
            // score all of the non-empty string keys on the object

            var keys = sharedKeyCount ? sharedKeys : Object.keys(_transformedItem);
            var keyCount = keys.length;
            var highScore = 0;
            var scoreKey = "";
            var scoreValue = ""; // find the highest score for each keyed string on this item

            for (var j = 0; j < keyCount; j++) {
              var key = keys[j]; // use the key as the name if it's just a string, and
              // default to the instance's scorer function

              var _key$name = key.name,
                  name = _key$name === void 0 ? key : _key$name,
                  _key$scorer = key.scorer,
                  scorer = _key$scorer === void 0 ? this.scorer : _key$scorer;
              var transformedString = _transformedItem[name]; // setItems() checks for non-strings and empty strings
              // when creating the transformed objects, so if the key
              // doesn't exist there, we can skip the processing
              // below for this key in this item

              if (transformedString) {
                var string = this.getItemString(_item, key);
                var _matches = [];
                var newScore = scorer(string, query, _matches, transformedString, transformedQuery, config);
                result.scores[name] = newScore;
                result.matches[name] = _matches;

                if (newScore > highScore) {
                  highScore = newScore;
                  scoreKey = name;
                  scoreValue = string;
                }
              }
            }

            if (highScore > minScore) {
              result.score = highScore;
              result.scoreKey = scoreKey;
              result.scoreValue = scoreValue;
              results.push(result);
            }
          }
        }

        results.sort(this.compareScoredStrings);
        return results;
      }
      /**
       * Sets the `keys` configuration.  `setItems()` must be called after changing
       * the keys so that the items' transformed strings get cached.
       *
       * @param {Array<string> | Array<object>} keys - List of keys to score, as
       * either strings or `{name, scorer}` objects.
       *
       * @param {string} [sortKey=keys[0]] - Name of key on which to sort
       * identically scored items.  Defaults to the first `keys` item.
       */

    }, {
      key: "setKeys",
      value: function setKeys(keys) {
        var sortKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        this.keys = [].concat(keys);
        this.sortKey = sortKey;

        if (this.keys.length) {
          var scorer = this.scorer; // associate each key with the scorer function, if it isn't already

          this.keys = this.keys.map(function (keyItem) {
            // items in the keys array should either be a string or
            // array specifying a key name, or a { name, scorer } object
            var key = keyItem.length ? {
              name: keyItem,
              scorer: scorer
            } : keyItem;

            if (Array.isArray(key.name)) {
              if (key.name.length > 1) {
                key.path = key.name;
                key.name = key.path.join(".");
              } else {
                // this path consists of just one key name, which was
                // probably wrapped in an array because it contains
                // dots but isn't intended as a key path.  so don't
                // create a path array on this key, so that we're not
                // constantly calling reduce() to get this one key.
                var _key$name2 = _slicedToArray(key.name, 1);

                key.name = _key$name2[0];
              }
            } else if (key.name.indexOf(".") > -1) {
              key.path = key.name.split(".");
            }

            return key;
          });
          this.sortKey = this.sortKey || this.keys[0].name;
        }
      }
      /**
       * Sets the `items` array and caches a transformed copy of all the item
       * strings specified by the `keys` parameter to the constructor, using the
       * `transformString` option (which defaults to `toLocaleLowerCase()`).
       *
       * @param {Array<string> | Array<object>} items - List of items to score.
       */

    }, {
      key: "setItems",
      value: function setItems(items) {
        var itemArray = [].concat(items);
        var itemCount = itemArray.length;
        var transformedItems = [];
        var sharedKeys = this.keys;
        var sharedKeyCount = sharedKeys.length;

        if (typeof itemArray[0] === "string") {
          for (var i = 0; i < itemCount; i++) {
            transformedItems.push(this.transformString(itemArray[i]));
          }
        } else {
          for (var _i2 = 0; _i2 < itemCount; _i2++) {
            var item = itemArray[_i2];
            var transformedItem = {};
            var keys = sharedKeyCount ? sharedKeys : Object.keys(item);
            var keyCount = keys.length;

            for (var j = 0; j < keyCount; j++) {
              var key = keys[j];
              var string = this.getItemString(item, key);

              if (string && typeof string === "string") {
                transformedItem[key.name || key] = this.transformString(string);
              }
            }

            transformedItems.push(transformedItem);
          }
        }

        this.items = itemArray;
        this.transformedItems = transformedItems;
      }
      /**
       * Gets an item's key, possibly at a nested path.
       *
       * @private
       * @param {object} item - An object with multiple string properties.
       * @param {object|string} key - A key object with
       * the name of the string to get from `item`, or a plain string when all
       * keys on an item are being matched.
       * @returns {string}
       */

    }, {
      key: "getItemString",
      value: function getItemString(item, key) {
        var name = key.name,
            path = key.path;

        if (path) {
          return path.reduce(function (value, prop) {
            return value && value[prop];
          }, item);
        } else {
          // if this instance is scoring all the keys on each item, key
          // will just be a string, not a { name, scorer } object
          return item[name || key];
        }
      }
      /**
       * Transforms a string into a canonical form for scoring.
       *
       * @private
       * @param {string} string - The string to transform.
       * @returns {string}
       */

    }, {
      key: "transformString",
      value: function transformString(string) {
        return this.transformStringFunc(string);
      }
      /**
       * Compares two items based on their scores, or on their `sortKey` if the
       * scores are identical.
       *
       * @private
       * @param {object} a - First item.
       * @param {object} b - Second item.
       * @returns {number}
       */

    }, {
      key: "compareScoredStrings",
      value: function compareScoredStrings(a, b) {
        // use the transformed versions of the strings for sorting
        var itemA = a._;
        var itemB = b._;
        var itemAString = typeof itemA === "string" ? itemA : itemA[this.sortKey];
        var itemBString = typeof itemB === "string" ? itemB : itemB[this.sortKey];

        if (a.score === b.score) {
          // sort undefineds to the end of the array, as per the ES spec
          if (itemAString === undefined || itemBString === undefined) {
            if (itemAString === undefined && itemBString === undefined) {
              return 0;
            } else if (itemAString === undefined) {
              return 1;
            } else {
              return -1;
            }
          } else if (itemAString === itemBString) {
            return 0;
          } else if (itemAString < itemBString) {
            return -1;
          } else {
            return 1;
          }
        } else {
          return b.score - a.score;
        }
      }
    }]);

    return QuickScore;
  }();
  /**
   * Default function for transforming each string to be searched.
   *
   * @private
   * @param {string} string - The string to transform.
   * @returns {string} The transformed string.
   */

  function toLocaleLowerCase(string) {
    return string.toLocaleLowerCase();
  }

  exports.BaseConfig = BaseConfig;
  exports.DefaultConfig = DefaultConfig;
  exports.QuickScore = QuickScore;
  QS = QuickScore;
  exports.QuicksilverConfig = QuicksilverConfig;
  exports.Range = Range;
  exports.createConfig = createConfig;
  exports.quickScore = quickScore;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


